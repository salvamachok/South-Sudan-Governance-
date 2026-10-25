from pathlib import Path
import pandas as pd
import streamlit as st

ROOT = Path(__file__).resolve().parent
DATA_CANDIDATES = [
    ROOT / "data" / "south_sudan_states_counties_payams_registry_cleaned_2026-10-25.csv",
    ROOT / "south_sudan_states_counties_payams_registry_cleaned_2026-10-25.csv",
]

st.set_page_config(page_title="South Sudan Administrative Registry", page_icon="SSR", layout="wide")
st.markdown("""
<style>
.block-container { max-width: 1500px; padding-top: 2rem; padding-bottom: 3rem; }
.hero { padding: 1.6rem 1.8rem; border-radius: 18px; background: linear-gradient(120deg,#122b45,#1d5270); color: white; margin-bottom: 1.2rem; }
.hero h1 { color: white; margin: 0 0 .35rem 0; font-size: 2rem; }
.hero p { color: #dcecf5; margin: 0; font-size: 1rem; }
[data-testid="stMetric"] { border: 1px solid #dce5ec; border-radius: 14px; padding: 14px 16px; background: #fff; }
.note { color: #5c6874; font-size: .88rem; }
</style>
""", unsafe_allow_html=True)

@st.cache_data
def load_registry(path: str) -> pd.DataFrame:
    df = pd.read_csv(path, dtype=str, keep_default_na=False)
    df.columns = [str(c).strip() for c in df.columns]
    for col in df.columns:
        df[col] = df[col].astype(str).str.strip()
    return df

data_path = next((p for p in DATA_CANDIDATES if p.exists()), None)
st.markdown("""
<div class="hero">
  <h1>South Sudan Administrative Registry</h1>
  <p>Search and review states, administrative areas, counties, payams and representative bomas.</p>
</div>
""", unsafe_allow_html=True)

if data_path is None:
    st.error("Registry CSV not found. Confirm the cleaned CSV is committed in the repository's data/ folder.")
    st.code("data/south_sudan_states_counties_payams_registry_cleaned_2026-10-25.csv")
    st.stop()

df = load_registry(str(data_path)).dropna(how="all").copy()
if "Territory Name" in df.columns:
    df = df[df["Territory Name"].astype(str).str.strip().ne("")]

territories = df["Territory Name"].nunique() if "Territory Name" in df.columns else 0
counties = df["County Name"].nunique() if "County Name" in df.columns else 0
payams = df["Payam Name"].nunique() if "Payam Name" in df.columns else 0
k1, k2, k3, k4 = st.columns(4)
k1.metric("Registry records", f"{len(df):,}")
k2.metric("Territories", f"{territories:,}")
k3.metric("Counties", f"{counties:,}")
k4.metric("Payams", f"{payams:,}")

with st.sidebar:
    st.header("Find records")
    query = st.text_input("Search all fields", placeholder="e.g. Juba, Pariang, Payam…")
    def choices(column):
        return sorted(v for v in df[column].dropna().astype(str).unique() if v.strip()) if column in df.columns else []
    tier_filter = st.multiselect("Territory tier", choices("Territory Tier"))
    region_filter = st.multiselect("Region", choices("Region"))
    territory_filter = st.multiselect("State / administrative area", choices("Territory Name"))
    county_filter = st.multiselect("County", choices("County Name"))
    show_qa = st.checkbox("Show data-quality fields", value=True)
    st.caption("Filters can be combined. Search checks every column in the registry.")

filtered = df.copy()
for column, selected in [
    ("Territory Tier", tier_filter), ("Region", region_filter),
    ("Territory Name", territory_filter), ("County Name", county_filter)
]:
    if selected and column in filtered.columns:
        filtered = filtered[filtered[column].isin(selected)]
if query.strip():
    q = query.strip().casefold()
    mask = filtered.astype(str).apply(
        lambda col: col.str.casefold().str.contains(q, regex=False, na=False)
    ).any(axis=1)
    filtered = filtered[mask]
if not show_qa:
    filtered = filtered.drop(columns=[c for c in ["QA_Flag", "QA_Notes"] if c in filtered.columns])

st.subheader("Registry records")
st.caption(f"Showing {len(filtered):,} of {len(df):,} records.")
display_cols = [c for c in [
    "Territory Tier", "Territory Name", "Region", "Special Administrative Area",
    "Capital / HQ", "County Name", "County HQ", "County Type", "Payam Name",
    "Sample Bomas", "QA_Flag", "QA_Notes"
] if c in filtered.columns]
st.dataframe(filtered[display_cols] if display_cols else filtered,
             use_container_width=True, hide_index=True, height=540)

st.download_button(
    "Download filtered records (CSV)",
    filtered.to_csv(index=False).encode("utf-8-sig"),
    file_name="south_sudan_registry_filtered.csv",
    mime="text/csv",
    use_container_width=True,
    disabled=filtered.empty,
)
st.download_button(
    "Download full registry (CSV)",
    df.to_csv(index=False).encode("utf-8-sig"),
    file_name="south_sudan_registry_full.csv",
    mime="text/csv",
    use_container_width=True,
)

st.divider()
st.subheader("Data-quality overview")
qa1, qa2, qa3 = st.columns(3)
if "QA_Flag" in df.columns:
    qa1.metric("Rows flagged OK", int(df["QA_Flag"].str.casefold().eq("ok").sum()))
    qa2.metric("Rows with other QA flags", int((df["QA_Flag"].str.strip().ne("") & ~df["QA_Flag"].str.casefold().eq("ok")).sum()))
else:
    qa1.metric("QA flag field", "Not available")
    qa2.metric("Rows with other QA flags", "Not available")
if "Payam Name" in df.columns and "Territory Name" in df.columns:
    repeated = df.groupby("Payam Name")["Territory Name"].nunique()
    qa3.metric("Payam names in multiple territories", int((repeated > 1).sum()))
else:
    qa3.metric("Repeated payam names", "Not available")

st.info("This is a working reference registry. Structural checks do not independently verify the current legal status, boundaries, or office holders. Confirm sensitive decisions against authoritative South Sudan government sources.")
st.markdown('<p class="note">Source file: cleaned administrative registry dated 25 October 2026.</p>', unsafe_allow_html=True)
