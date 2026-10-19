import { StateEntity, ParliamentaryParty, ParliamentaryCommittee, LegalArticle } from '../types';

export const NATIONAL_LEGISLATURE_SUMMARY = {
  name: "National Legislature of the Republic of South Sudan",
  arabicName: "المجلس التشريعي القومي لجنوب السودان",
  seat: "Juba, Central Equatoria State",
  constitutionalBasis: "Transitional Constitution of South Sudan (2011) as amended & Revitalized Agreement (R-ARCSS 2018)",
  chambersCount: 2,
  totalSeats: 650, // 550 TNLA + 100 Council of States
  speakers: {
    tnla: {
      name: "Rt. Hon. Jemma Nunu Kumba",
      title: "Speaker of the Transitional National Legislative Assembly",
      party: "SPLM-IG",
      historicNote: "First female Speaker of South Sudan's National Legislature"
    },
    councilOfStates: {
      name: "Rt. Hon. Deng Deng Akon",
      title: "Speaker of the Council of States",
      party: "SSOA / Coalition",
      historicNote: "Presiding officer of the Upper House representing the 10 States and 3 Administrative Areas"
    }
  },
  deputySpeakers: [
    { chamber: "TNLA", name: "Hon. Nathaniel Oyet Pierino", title: "First Deputy Speaker", party: "SPLM-IO" },
    { chamber: "TNLA", name: "Hon. Parmena Awerial Aluong", title: "Second Deputy Speaker", party: "SPLM-IG" },
    { chamber: "Council of States", name: "Hon. Mary Ayen Majok", title: "Deputy Speaker", party: "SPLM-IG" }
  ]
};

export const PARLIAMENTARY_PARTIES: ParliamentaryParty[] = [
  {
    name: "Sudan People's Liberation Movement in Government",
    abbreviation: "SPLM-IG",
    color: "#dc2626", // Red from national flag
    tnlaSeats: 332,
    councilOfStatesSeats: 46,
    percentageTnla: 60.36,
    description: "Incumbent ruling political party led by President Salva Kiir Mayardit, established as liberation movement in 1983."
  },
  {
    name: "Sudan People's Liberation Movement in Opposition",
    abbreviation: "SPLM-IO",
    color: "#2563eb", // Blue from national flag triangle
    tnlaSeats: 128,
    councilOfStatesSeats: 27,
    percentageTnla: 23.27,
    description: "Primary opposition peace partner signatory to the R-ARCSS 2018, led by First Vice President Dr. Riek Machar Teny."
  },
  {
    name: "South Sudan Opposition Alliance",
    abbreviation: "SSOA",
    color: "#16a34a", // Green from national flag
    tnlaSeats: 50,
    councilOfStatesSeats: 10,
    percentageTnla: 9.09,
    description: "Coalition of distinct political parties and opposition movements formed to negotiate peace and governance stability."
  },
  {
    name: "Other Political Parties",
    abbreviation: "OPP",
    color: "#d97706", // Amber/Gold from star
    tnlaSeats: 30,
    councilOfStatesSeats: 9,
    percentageTnla: 5.45,
    description: "National registered political parties participating in the transitional democratic consensus."
  },
  {
    name: "Former Detainees",
    abbreviation: "FDs",
    color: "#475569", // Slate
    tnlaSeats: 10,
    councilOfStatesSeats: 8,
    percentageTnla: 1.82,
    description: "Senior political figures and former ministerial leadership signatories to the 2018 Revitalized Peace Agreement."
  }
];

export const PARLIAMENTARY_COMMITTEES: ParliamentaryCommittee[] = [
  {
    id: "leg-01",
    name: "Legislation, Justice & Constitutional Affairs",
    chamber: "TNLA",
    mandate: "Drafting, reviewing, and scrutinizing all primary national statutes, transitional constitutional amendments, and penal revisions.",
    oversightSector: "Ministry of Justice and Constitutional Affairs, Judiciary of South Sudan"
  },
  {
    id: "fin-02",
    name: "Finance, Planning & Economic Scrutiny",
    chamber: "TNLA",
    mandate: "Reviewing the National Annual Budget, appropriations, revenue mobilization (NRA), and fiscal policy allocations to states.",
    oversightSector: "Ministry of Finance & Planning, National Revenue Authority, Bank of South Sudan"
  },
  {
    id: "pet-03",
    name: "Petroleum, Energy & Mining Oversight",
    chamber: "TNLA",
    mandate: "Inquiry into crude oil production sharing agreements (EPSA), block concessions in Upper Nile & Unity, and environmental reclamation.",
    oversightSector: "Ministry of Petroleum, Ministry of Mining, Nilepet"
  },
  {
    id: "pac-04",
    name: "Public Accounts Committee (PAC)",
    chamber: "TNLA",
    mandate: "Investigating the Auditor General's annual reports on government expenditure, tender compliance, and national funds.",
    oversightSector: "National Audit Chamber, All Government Ministries and Public Corporations"
  },
  {
    id: "sec-05",
    name: "Defense, National Security & Veteran Affairs",
    chamber: "TNLA",
    mandate: "Legislative oversight over the South Sudan People's Defence Forces (SSPDF), unified forces integration, and border defense.",
    oversightSector: "Ministry of Defense and Veteran Affairs, SSPDF High Command"
  },
  {
    id: "agr-06",
    name: "Agriculture, Food Security & Rural Development",
    chamber: "TNLA",
    mandate: "Policies fostering cereal cultivation, mechanization in the greenbelt, grain reserves, and livestock disease prevention.",
    oversightSector: "Ministry of Agriculture & Forestry, Ministry of Livestock & Fisheries"
  },
  {
    id: "state-07",
    name: "Decentralization, Inter-State Relations & Boundary Resolution",
    chamber: "Council of States",
    mandate: "Investigating border demarcations between neighboring states and administrative areas, resolving inter-communal cattle migration disputes.",
    oversightSector: "10 State Governments, 3 Special Administrative Areas, Local Government Board"
  },
  {
    id: "state-08",
    name: "Devolution of Powers & Local Government Oversight",
    chamber: "Council of States",
    mandate: "Evaluating the implementation of 20% national revenue sharing with states and capacity development of County Commissioners.",
    oversightSector: "Council of Ministers, State Ministries of Local Government"
  }
];

export const LEGAL_FRAMEWORK_ARTICLES: LegalArticle[] = [
  {
    number: "Article 55 & 56",
    title: "Establishment of the Bicameral National Legislature",
    source: "Transitional Constitution of South Sudan (2011)",
    excerpt: "There shall be established a National Legislature comprising the National Legislative Assembly and the Council of States. The National Legislature represents the will of the people and fosters national unity.",
    significance: "Enshrines the separation of powers and the bicameral legislature representing both popular franchise and federated territorial units."
  },
  {
    number: "Article 59",
    title: "Competence and Mandate of the Council of States",
    source: "Transitional Constitution of South Sudan (2011)",
    excerpt: "The Council of States shall be competent to initiate and pass legislation on the decentralized system of government and state affairs, and resolve issues of inter-state conflict.",
    significance: "Empowers the upper chamber as the constitutional guardian of state rights and local governance equity."
  },
  {
    number: "Section 1.14",
    title: "Reconstitution of the Transitional National Legislature",
    source: "Revitalized Agreement on the Resolution of the Conflict (R-ARCSS 2018)",
    excerpt: "The Transitional National Legislative Assembly shall be expanded from 400 to 550 members, and the Council of States reconstituted to 100 members, allocated among peace agreement signatories.",
    significance: "Instituted the quota-based power-sharing formula that currently governs South Sudan's parliament during the transitional period."
  },
  {
    number: "Section 10 & 11",
    title: "County, Payam and Boma Administrative Tiers",
    source: "Local Government Act (2009)",
    excerpt: "The Local Government system in Southern Sudan shall be based on three tiers: County, Payam and Boma. The County is the primary socio-economic development unit; the Payam is the coordinating unit; and the Boma is the basic administrative and community unit.",
    significance: "Legally codifies the foundational decentralized administrative pyramid and acknowledges customary law chieftaincies at the Boma tier."
  },
  {
    number: "Section 60-75",
    title: "Recognition of Traditional Authorities & Customary Courts",
    source: "Local Government Act (2009)",
    excerpt: "Customary law shall guide social dispute resolution, land customary tenure, and communal restitution under recognized Paramount Chiefs, Head Chiefs, and Executive Chiefs.",
    significance: "Harmonizes statutory civil administration with traditional justice systems that serve over 80% of citizens across Bomas."
  }
];

export const STATES_AND_AREAS_DATA: StateEntity[] = [
  // ================= GREATER EQUATORIA =================
  {
    id: "central-equatoria",
    name: "Central Equatoria State",
    capital: "Juba",
    region: "Greater Equatoria",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Emmanuel Adil Anthony",
    assemblySeats: 100,
    speakerName: "Hon. Peter Wani Elia",
    areaKm2: 43033,
    estimatedPopulation: "1,650,000",
    historicalContext: "Host of the national capital Juba and historic commercial crossroads along the White Nile. It is the administrative nerve center of South Sudan.",
    economicActivity: ["Commercial Trade & Banking", "Horticulture & Cassava Farming", "White Nile Riverine Transport", "Manufacturing & Construction"],
    counties: [
      {
        id: "juba-county",
        name: "Juba County",
        stateId: "central-equatoria",
        headquarters: "Juba / Rajaf",
        countyType: "Rural County",
        description: "Encompasses rural and peri-urban hinterlands surrounding the national capital city, traversing both banks of the White Nile.",
        keySectors: ["Agriculture", "Quarrying", "River transport", "Cross-border commerce"],
        payams: [
          {
            id: "juba-p-01",
            name: "Juba Town Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Juba Core",
            estimatedBomasCount: 8,
            sampleBomas: ["Hai Malakal", "Kator West", "Atlabara", "Juba Commercial", "Gudele Block 1"],
            notes: "Central commercial administrative hub containing national ministry buildings."
          },
          {
            id: "juba-p-02",
            name: "Munuki Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Munuki",
            estimatedBomasCount: 7,
            sampleBomas: ["Munuki Block A", "Munuki Block B", "Suk Libya", "Gudele 2"],
            notes: "Vibrant high-density residential and enterprise hub."
          },
          {
            id: "juba-p-03",
            name: "Kator Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Kator",
            estimatedBomasCount: 6,
            sampleBomas: ["Kator Cathedral Boma", "St. Theresa", "Kator South", "Malakia"],
            notes: "Historic mission center and cultural settlement."
          },
          {
            id: "juba-p-04",
            name: "Rajaf (Rejaf) Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Rajaf East",
            estimatedBomasCount: 9,
            sampleBomas: ["Rajaf West", "Khor Romula", "Gumbo", "Sherikat", "Tokiman"],
            notes: "Site of historic Emin Pasha stations and key river crossing."
          },
          {
            id: "juba-p-05",
            name: "Northern Bari Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Khor William / Bilpam",
            estimatedBomasCount: 8,
            sampleBomas: ["Bilpam Boma", "Mogiri", "Gueri", "Ghabat"],
            notes: "Savannah farming belt and peri-urban pasture."
          },
          {
            id: "juba-p-06",
            name: "Mangalla Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Mangalla Port",
            estimatedBomasCount: 7,
            sampleBomas: ["Mangalla Center", "Lowi", "Gemeiza Border", "Molur"],
            notes: "Strategic river port and agricultural resettlement zone."
          },
          {
            id: "juba-p-07",
            name: "Lokiliri Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Lokiliri",
            estimatedBomasCount: 6,
            sampleBomas: ["Khor Inglizi", "Nesitu Boma", "Kit", "Moli Border"],
            notes: "Woodland zone along the Juba-Nimule international highway."
          },
          {
            id: "juba-p-08",
            name: "Bungu Payam",
            countyId: "juba-county",
            stateId: "central-equatoria",
            headquarters: "Bungu",
            estimatedBomasCount: 5,
            sampleBomas: ["Bungu Center", "Ganji", "Ngangala"],
            notes: "Agricultural grain and charcoal production territory."
          }
        ]
      },
      {
        id: "yei-county",
        name: "Yei River County",
        stateId: "central-equatoria",
        headquarters: "Yei Town",
        description: "Known as the agro-economic basket of Equatoria with fertile tropical soil, connecting South Sudan to Uganda and DRC.",
        keySectors: ["Coffee & Teak", "Cassava & Maize", "Cross-border Trade"],
        payams: [
          {
            id: "yei-p-01",
            name: "Yei Town Payam",
            countyId: "yei-county",
            stateId: "central-equatoria",
            sampleBomas: ["Sopiri", "Lutaya", "Sombogo", "Hai Mission"],
            estimatedBomasCount: 8
          },
          {
            id: "yei-p-02",
            name: "Otogo Payam",
            countyId: "yei-county",
            stateId: "central-equatoria",
            sampleBomas: ["Maridi Road Boma", "Mugwo Border", "Kindi", "Kagelu"],
            estimatedBomasCount: 7
          },
          {
            id: "yei-p-03",
            name: "Mugwo Payam",
            countyId: "yei-county",
            stateId: "central-equatoria",
            sampleBomas: ["Mugwo Central", "Ropani", "Nyori"],
            estimatedBomasCount: 5
          },
          {
            id: "yei-p-04",
            name: "Lasu Payam",
            countyId: "yei-county",
            stateId: "central-equatoria",
            sampleBomas: ["Lasu Border", "Kuba", "Isebi", "Libogo"],
            estimatedBomasCount: 6,
            notes: "Frontier payam bordering the Democratic Republic of the Congo."
          },
          {
            id: "yei-p-05",
            name: "Tore Payam",
            countyId: "yei-county",
            stateId: "central-equatoria",
            sampleBomas: ["Tore Wandi", "Mitika", "Kenyira"],
            estimatedBomasCount: 5
          }
        ]
      },
      {
        id: "kajo-keji-county",
        name: "Kajo-Keji County",
        stateId: "central-equatoria",
        headquarters: "Mere / Kajo-Keji",
        description: "High plateau adjoining northern Uganda with dense educational traditions, rich honey production, and dairy cattle.",
        keySectors: ["Honey & Beekeeping", "Education & Forestry", "Citrus Farming"],
        payams: [
          {
            id: "kajo-p-01",
            name: "Kangapo 1 Payam",
            countyId: "kajo-keji-county",
            stateId: "central-equatoria",
            sampleBomas: ["Moyo Border Boma", "Gaderu", "Lori"],
            estimatedBomasCount: 6
          },
          {
            id: "kajo-p-02",
            name: "Kangapo 2 Payam",
            countyId: "kajo-keji-county",
            stateId: "central-equatoria",
            sampleBomas: ["Wudu Center", "Sondoki", "Kiri"],
            estimatedBomasCount: 6
          },
          {
            id: "kajo-p-03",
            name: "Liwolo Payam",
            countyId: "kajo-keji-county",
            stateId: "central-equatoria",
            sampleBomas: ["Kala", "Nyepo Border", "Mangalatore"],
            estimatedBomasCount: 5
          },
          {
            id: "kajo-p-04",
            name: "Nyepo Payam",
            countyId: "kajo-keji-county",
            stateId: "central-equatoria",
            sampleBomas: ["Jale", "Ligi", "Loni"],
            estimatedBomasCount: 4
          },
          {
            id: "kajo-p-05",
            name: "Lire Payam",
            countyId: "kajo-keji-county",
            stateId: "central-equatoria",
            sampleBomas: ["Mondikolok", "Godu", "Jalimo"],
            estimatedBomasCount: 5
          }
        ]
      },
      {
        id: "lainya-county",
        name: "Lainya County",
        stateId: "central-equatoria",
        headquarters: "Lainya Town",
        description: "Situated along the strategic Juba-Yei road corridor, renowned for fruit orchards and timber.",
        keySectors: ["Timber", "Tropical Fruits", "Sweet Potatoes"],
        payams: [
          {
            id: "lainya-p-01",
            name: "Lainya Payam",
            countyId: "lainya-county",
            stateId: "central-equatoria",
            sampleBomas: ["Lainya Boma", "Kenyi Boma", "Lokurubang"],
            estimatedBomasCount: 5
          },
          {
            id: "lainya-p-02",
            name: "Kupera Payam",
            countyId: "lainya-county",
            stateId: "central-equatoria",
            sampleBomas: ["Kupera Central", "Boring", "Limbe"],
            estimatedBomasCount: 5
          },
          {
            id: "lainya-p-03",
            name: "Mukaya Payam",
            countyId: "lainya-county",
            stateId: "central-equatoria",
            sampleBomas: ["Moli", "Doka", "Bereka"],
            estimatedBomasCount: 4
          },
          {
            id: "lainya-p-04",
            name: "Wuji Payam",
            countyId: "lainya-county",
            stateId: "central-equatoria",
            sampleBomas: ["Wuji Center", "Lobonok Border", "Yoka"],
            estimatedBomasCount: 4
          }
        ]
      },
      {
        id: "morobo-county",
        name: "Morobo County",
        stateId: "central-equatoria",
        headquarters: "Morobo Center",
        description: "Border tri-junction connecting South Sudan, Uganda (Koboko), and DRC (Aru).",
        keySectors: ["Cross-border Transit", "Cassava Starch", "Forestry"],
        payams: [
          {
            id: "morobo-p-01",
            name: "Kimba Payam",
            countyId: "morobo-county",
            stateId: "central-equatoria",
            sampleBomas: ["Kimba Boma", "Kaya Border Boma", "Oraba Junction"],
            estimatedBomasCount: 6
          },
          {
            id: "morobo-p-02",
            name: "Lujule Payam",
            countyId: "morobo-county",
            stateId: "central-equatoria",
            sampleBomas: ["Lujule Town", "Panyume", "Yondu"],
            estimatedBomasCount: 5
          },
          {
            id: "morobo-p-03",
            name: "Gulumbi Payam",
            countyId: "morobo-county",
            stateId: "central-equatoria",
            sampleBomas: ["Gulumbi Center", "Alero", "Bazi"],
            estimatedBomasCount: 4
          }
        ]
      },
      {
        id: "terekeka-county",
        name: "Terekeka County",
        stateId: "central-equatoria",
        headquarters: "Terekeka Town",
        description: "Northern territory of Central Equatoria inhabited predominantly by the Mundari community; famed for majestic cattle camps and fishing.",
        keySectors: ["Livestock & Pastoralism", "Freshwater Fisheries", "Sorghum & Groundnuts"],
        payams: [
          {
            id: "tere-p-01",
            name: "Terekeka Payam",
            countyId: "terekeka-county",
            stateId: "central-equatoria",
            sampleBomas: ["Terekeka Town", "Muni", "Gimunu"],
            estimatedBomasCount: 6
          },
          {
            id: "tere-p-02",
            name: "Nyori Payam",
            countyId: "terekeka-county",
            stateId: "central-equatoria",
            sampleBomas: ["Nyori Central", "Tali Border", "Wunduruba"],
            estimatedBomasCount: 5
          },
          {
            id: "tere-p-03",
            name: "Tali Payam",
            countyId: "terekeka-county",
            stateId: "central-equatoria",
            sampleBomas: ["Tali Center", "Gerek", "Lado North"],
            estimatedBomasCount: 6
          },
          {
            id: "tere-p-04",
            name: "Tijor Payam",
            countyId: "terekeka-county",
            stateId: "central-equatoria",
            sampleBomas: ["Tijor Center", "Rijong", "Pariak Border"],
            estimatedBomasCount: 5
          },
          {
            id: "tere-p-05",
            name: "Rego Payam",
            countyId: "terekeka-county",
            stateId: "central-equatoria",
            sampleBomas: ["Rego Center", "Koro", "Bari North"],
            estimatedBomasCount: 4
          }
        ]
      }
    ]
  },

  {
    id: "eastern-equatoria",
    name: "Eastern Equatoria State",
    capital: "Torit",
    region: "Greater Equatoria",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Louis Lobong Lojore",
    assemblySeats: 100,
    speakerName: "Hon. Severino Maira Janice",
    areaKm2: 73473,
    estimatedPopulation: "1,220,000",
    historicalContext: "Birthplace of the 1955 Torit Mutiny that ignited the Anyanya liberation struggle. Bordered by Uganda, Kenya, and Ethiopia.",
    economicActivity: ["Gold & Mineral Deposits", "Cross-Border Commerce (Nimule Port)", "Livestock Herding", "Agro-forestry"],
    counties: [
      {
        id: "torit-county",
        name: "Torit County",
        stateId: "eastern-equatoria",
        headquarters: "Torit Town",
        description: "State capital county set in a picturesque valley flanked by the Imatong Mountain foothills.",
        keySectors: ["Government Services", "Market Trade", "Maize & Sorghum"],
        payams: [
          {
            id: "tor-p-01",
            name: "Torit Town Payam",
            countyId: "torit-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Nyong", "Hiyala Road", "Murahari", "Onyire"],
            estimatedBomasCount: 6
          },
          {
            id: "tor-p-02",
            name: "Hiyala Payam",
            countyId: "torit-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Hiyala Boma", "Chahari", "Oguruny"],
            estimatedBomasCount: 5
          },
          {
            id: "tor-p-03",
            name: "Imurok Payam",
            countyId: "torit-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Imurok Center", "Lopit Border", "Kudo"],
            estimatedBomasCount: 5
          },
          {
            id: "tor-p-04",
            name: "Ifotu Payam",
            countyId: "torit-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Ifotu Boma", "Ilyeu", "Lowoi Border"],
            estimatedBomasCount: 4
          }
        ]
      },
      {
        id: "magwi-county",
        name: "Magwi County",
        stateId: "eastern-equatoria",
        headquarters: "Magwi Town",
        description: "Hosts Nimule, the busiest international border post between South Sudan and East Africa, and the Nimule National Park.",
        keySectors: ["Customs & Clearing", "Commercial Grain Farming", "Tourism (Wildlife)"],
        payams: [
          {
            id: "mag-p-01",
            name: "Nimule Payam",
            countyId: "magwi-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Customs Boma", "Malakia Nimule", "Motyo", "Anzara"],
            estimatedBomasCount: 6
          },
          {
            id: "mag-p-02",
            name: "Magwi Payam",
            countyId: "magwi-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Magwi Town", "Omeo", "Agoro"],
            estimatedBomasCount: 5
          },
          {
            id: "mag-p-03",
            name: "Pageri Payam",
            countyId: "magwi-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Pageri Center", "Moli Tokuro", "Loa", "Arinyapi"],
            estimatedBomasCount: 6
          },
          {
            id: "mag-p-04",
            name: "Iwire Payam",
            countyId: "magwi-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Kit Border", "Ayu", "Jebelein"],
            estimatedBomasCount: 4
          }
        ]
      },
      {
        id: "ikotos-county",
        name: "Ikotos County",
        stateId: "eastern-equatoria",
        headquarters: "Ikotos Town",
        description: "Mountainous highland county home to Mount Kinyeti (highest peak in South Sudan at 3,187m) and the Imatong cloud forests.",
        keySectors: ["Tea & Coffee", "Timber & Forestry", "Livestock"],
        payams: [
          {
            id: "iko-p-01",
            name: "Ikotos Payam",
            countyId: "ikotos-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Ikotos Center", "Chahari", "Hiateng"],
            estimatedBomasCount: 5
          },
          {
            id: "iko-p-02",
            name: "Lomohidang Payam",
            countyId: "ikotos-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Lomohidang Center", "Kidepo Valley", "Imatong Peak"],
            estimatedBomasCount: 6
          },
          {
            id: "iko-p-03",
            name: "Ibahure Payam",
            countyId: "ikotos-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Ibahure Town", "Bira", "Losite"],
            estimatedBomasCount: 4
          }
        ]
      },
      {
        id: "kapoeta-south-county",
        name: "Kapoeta South County",
        stateId: "eastern-equatoria",
        headquarters: "Kapoeta Town",
        description: "Historic trade nexus of the Toposa pastoralist communities and rich artisanal alluvial gold deposits along River Singaita.",
        keySectors: ["Artisanal Gold Mining", "Pastoralism & Cattle", "Trade with Kenya"],
        payams: [
          {
            id: "kaps-p-01",
            name: "Kapoeta Town Payam",
            countyId: "kapoeta-south-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Kapoeta Center", "Lopiripir", "Nadapal Road"],
            estimatedBomasCount: 5
          },
          {
            id: "kaps-p-02",
            name: "Machie Payam",
            countyId: "kapoeta-south-county",
            stateId: "eastern-equatoria",
            sampleBomas: ["Machie Center", "Loolim", "Kauto"],
            estimatedBomasCount: 4
          }
        ]
      },
      {
        id: "kapoeta-north-county",
        name: "Kapoeta North County",
        stateId: "eastern-equatoria",
        headquarters: "Riwoto",
        description: "Expansive savannah pastoral land known for deep-rooted customary chieftaincy networks.",
        keySectors: ["Pastoralism", "Sorghum cultivation", "Hides & Skins"],
        payams: [
          { id: "kapn-p-01", name: "Riwoto Payam", countyId: "kapoeta-north-county", stateId: "eastern-equatoria", sampleBomas: ["Riwoto Boma", "Lokwamor", "Najie"], estimatedBomasCount: 5 },
          { id: "kapn-p-02", name: "Najie Payam", countyId: "kapoeta-north-county", stateId: "eastern-equatoria", sampleBomas: ["Najie Center", "Lomeyen", "Karukura"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "kapoeta-east-county",
        name: "Kapoeta East County",
        stateId: "eastern-equatoria",
        headquarters: "Narus",
        description: "Vast eastern frontier bordering Kenya and the Ilemi Triangle, containing the Narus humanitarian and missionary centers.",
        keySectors: ["Cross-border Trade (Lokichogio corridor)", "Livestock", "Gum Arabic"],
        payams: [
          { id: "kape-p-01", name: "Narus Payam", countyId: "kapoeta-east-county", stateId: "eastern-equatoria", sampleBomas: ["Narus Town", "Nadapal Border", "Lokichoggio Gate"], estimatedBomasCount: 6 },
          { id: "kape-p-02", name: "Mogos Payam", countyId: "kapoeta-east-county", stateId: "eastern-equatoria", sampleBomas: ["Mogos Center", "Kauto East", "Lochor"], estimatedBomasCount: 4 },
          { id: "kape-p-03", name: "Jie Payam", countyId: "kapoeta-east-county", stateId: "eastern-equatoria", sampleBomas: ["Jie Center", "Lokwanyang", "Kassengor"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "budi-county",
        name: "Budi County",
        stateId: "eastern-equatoria",
        headquarters: "Chukudum",
        description: "Home of the Didinga and Buya peoples nestled along the Didinga Hills, with historic significance during the SPLA liberation struggle.",
        keySectors: ["Artisanal Mining", "Terrace Farming", "Livestock"],
        payams: [
          { id: "bud-p-01", name: "Chukudum Payam", countyId: "budi-county", stateId: "eastern-equatoria", sampleBomas: ["Chukudum Boma", "Lauro", "Camp 15"], estimatedBomasCount: 5 },
          { id: "bud-p-02", name: "Komo Payam", countyId: "budi-county", stateId: "eastern-equatoria", sampleBomas: ["Komo Boma", "Nagalibak", "Kimotong"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "lafon-county",
        name: "Lafon (Lopa) County",
        stateId: "eastern-equatoria",
        headquarters: "Lafon Hill",
        description: "Center of the Pari and Lopit communities, celebrated for traditional rock settlements and organic agriculture.",
        keySectors: ["Traditional Agriculture", "Livestock", "Pottery & Crafts"],
        payams: [
          { id: "laf-p-01", name: "Lafon Payam", countyId: "lafon-county", stateId: "eastern-equatoria", sampleBomas: ["Lafon Rock Boma", "Pugeri", "Lohia"], estimatedBomasCount: 5 },
          { id: "laf-p-02", name: "Lopit Payam", countyId: "lafon-county", stateId: "eastern-equatoria", sampleBomas: ["Lopit West", "Imehejek", "Oronyo"], estimatedBomasCount: 4 }
        ]
      }
    ]
  },

  {
    id: "western-equatoria",
    name: "Western Equatoria State",
    capital: "Yambio",
    region: "Greater Equatoria",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Gen. Alfred Futuyo Karaba",
    assemblySeats: 100,
    speakerName: "Hon. Wakila Charles",
    areaKm2: 79319,
    estimatedPopulation: "1,100,000",
    historicalContext: "Historical seat of the Azande Kingdom ruled by King Gbudwe. Famous for the fertile Equatorial Green Belt, tropical fruit groves, and timber.",
    economicActivity: ["Teak & Mahogany Forestry", "Tropical Agriculture (Pineapples, Mangoes, Honey)", "Coffee & Palm Oil", "Gold Deposits"],
    counties: [
      {
        id: "yambio-county",
        name: "Yambio County",
        stateId: "western-equatoria",
        headquarters: "Yambio Town",
        description: "State capital featuring the Tomb of King Gbudwe, lush teak plantations, and agricultural research institutions.",
        keySectors: ["Commercial Farming", "Teak Harvesting", "Agro-processing"],
        payams: [
          { id: "yam-p-01", name: "Yambio Central Payam", countyId: "yambio-county", stateId: "western-equatoria", sampleBomas: ["Makpandu", "Bazungua", "Hai Tindoka", "Nangodi"], estimatedBomasCount: 7 },
          { id: "yam-p-02", name: "Ri-Rangu Payam", countyId: "yambio-county", stateId: "western-equatoria", sampleBomas: ["Ri-Rangu Boma", "Gangura", "Akpa"], estimatedBomasCount: 5 },
          { id: "yam-p-03", name: "Gangura Payam", countyId: "yambio-county", stateId: "western-equatoria", sampleBomas: ["Gangura Center", "Sakure", "Diabio Border"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "nzara-county",
        name: "Nzara County",
        stateId: "western-equatoria",
        headquarters: "Nzara Town",
        description: "Historic agro-industrial core of the Zande Scheme established in the 1940s for cotton textile spinning and oil pressing.",
        keySectors: ["Cotton Processing", "Palm Oil", "Cassava Mills"],
        payams: [
          { id: "nza-p-01", name: "Nzara Payam", countyId: "nzara-county", stateId: "western-equatoria", sampleBomas: ["Nzara Factory Boma", "Ringasi", "Basukangbi"], estimatedBomasCount: 5 },
          { id: "nza-p-02", name: "Sakure Payam", countyId: "nzara-county", stateId: "western-equatoria", sampleBomas: ["Sakure Center", "Kuro", "Yubu Border"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "maridi-county",
        name: "Maridi County",
        stateId: "western-equatoria",
        headquarters: "Maridi Town",
        description: "Renowned for Maridi Teachers Training Institute, fertile rolling hills, and pure honey harvesting.",
        keySectors: ["Honey & Wax", "Education", "Cassava & Groundnuts"],
        payams: [
          { id: "mar-p-01", name: "Maridi Payam", countyId: "maridi-county", stateId: "western-equatoria", sampleBomas: ["Maridi Central", "Hai Muduria", "Landili"], estimatedBomasCount: 6 },
          { id: "mar-p-02", name: "Kozi Payam", countyId: "maridi-county", stateId: "western-equatoria", sampleBomas: ["Kozi Center", "Mambe", "Muro"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "ezo-county",
        name: "Ezo County",
        stateId: "western-equatoria",
        headquarters: "Ezo Town",
        description: "Frontier county meeting the borders of the Central African Republic and Democratic Republic of the Congo.",
        keySectors: ["Cross-Border Trade", "Coffee", "Palm Oil"],
        payams: [
          { id: "ezo-p-01", name: "Ezo Central Payam", countyId: "ezo-county", stateId: "western-equatoria", sampleBomas: ["Ezo Town", "Source Yubu", "Bagidi"], estimatedBomasCount: 5 },
          { id: "ezo-p-02", name: "Bariguna Payam", countyId: "ezo-county", stateId: "western-equatoria", sampleBomas: ["Bariguna Boma", "Naandi", "Bangazau"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "tambura-county",
        name: "Tambura County",
        stateId: "western-equatoria",
        headquarters: "Tambura Town",
        description: "Historic colonial station bordering CAR, known for high agricultural potential and hardwood forests.",
        keySectors: ["Hardwood Timber", "Citrus & Cassava", "Mining Prospects"],
        payams: [
          { id: "tam-p-01", name: "Tambura Payam", countyId: "tambura-county", stateId: "western-equatoria", sampleBomas: ["Tambura Town", "Mopoi", "Source Yubu"], estimatedBomasCount: 5 },
          { id: "tam-p-02", name: "Akpa Payam", countyId: "tambura-county", stateId: "western-equatoria", sampleBomas: ["Akpa Center", "Bujua", "Yabongo"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "ibba-county",
        name: "Ibba County",
        stateId: "western-equatoria",
        headquarters: "Ibba Town",
        description: "Hosts the Ibba Girls' Boarding School and expansive honey harvesting reserves.",
        keySectors: ["Honey", "Education", "Cassava"],
        payams: [
          { id: "ibb-p-01", name: "Ibba Payam", countyId: "ibba-county", stateId: "western-equatoria", sampleBomas: ["Ibba Town", "Madebe", "Maruko"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "mundri-west-county",
        name: "Mundri West County",
        stateId: "western-equatoria",
        headquarters: "Mundri Town",
        description: "Traversed by River Yei, home of the Moru people and famous historical church educational institutions (Lui).",
        keySectors: ["Education & Healthcare", "Cereal Agriculture", "Timber"],
        payams: [
          { id: "mw-p-01", name: "Mundri Payam", countyId: "mundri-west-county", stateId: "western-equatoria", sampleBomas: ["Mundri Town", "Amadi", "Bangolo"], estimatedBomasCount: 5 },
          { id: "mw-p-02", name: "Lui Payam", countyId: "mundri-west-county", stateId: "western-equatoria", sampleBomas: ["Lui Hospital Boma", "Gulu", "Kediba Border"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "mundri-east-county",
        name: "Mundri East County",
        stateId: "western-equatoria",
        headquarters: "Kediba",
        description: "Known for the scenic Amadi rock formations and farming plains.",
        keySectors: ["Agriculture", "Honey", "Charcoal"],
        payams: [
          { id: "me-p-01", name: "Kediba Payam", countyId: "mundri-east-county", stateId: "western-equatoria", sampleBomas: ["Kediba Center", "Lozoh", "Mingire"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "mvolo-county",
        name: "Mvolo County",
        stateId: "western-equatoria",
        headquarters: "Mvolo Center",
        description: "Northernmost county of Western Equatoria bordering Lakes State, renowned for fertile wetlands and gum arabic.",
        keySectors: ["Sorghum", "Fisheries", "Honey"],
        payams: [
          { id: "mvo-p-01", name: "Mvolo Payam", countyId: "mvolo-county", stateId: "western-equatoria", sampleBomas: ["Mvolo Town", "Bahr Gel", "Kokori"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "nagero-county",
        name: "Nagero County",
        stateId: "western-equatoria",
        headquarters: "Nagero Center",
        description: "Dense woodland savannah transitioning toward Western Bahr el Ghazal.",
        keySectors: ["Timber", "Hunting & Wildlife Reserves", "Agriculture"],
        payams: [
          { id: "nag-p-01", name: "Nagero Payam", countyId: "nagero-county", stateId: "western-equatoria", sampleBomas: ["Nagero Boma", "Zamoi", "Gua"], estimatedBomasCount: 4 }
        ]
      }
    ]
  },

  // ================= GREATER BAHR EL GHAZAL =================
  {
    id: "northern-bahr-el-ghazal",
    name: "Northern Bahr el Ghazal State",
    capital: "Aweil",
    region: "Greater Bahr el Ghazal",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Tong Akeen Ngor",
    assemblySeats: 100,
    speakerName: "Hon. Achol William Amoi",
    areaKm2: 30543,
    estimatedPopulation: "1,400,000",
    historicalContext: "Dense agrarian and pastoralist state, featuring the historic Aweil Rice Scheme and the international railway link to Sudan.",
    economicActivity: ["Aweil Rice Scheme", "Sorghum & Sesame Cultivation", "Livestock Trading", "Cross-border Trade"],
    counties: [
      {
        id: "aweil-centre-county",
        name: "Aweil Centre County",
        stateId: "northern-bahr-el-ghazal",
        headquarters: "Aweil Town / Nyalath",
        description: "Seat of the state government and historic railway terminal connecting Bahr el Ghazal to northern trade routes.",
        keySectors: ["Rice Cultivation", "Public Administration", "Trade Hub"],
        payams: [
          { id: "nbg-ac-01", name: "Aweil Town Payam", countyId: "aweil-centre-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Mathiang", "Maper", "Hai Salaam", "Nyalath"], estimatedBomasCount: 6 },
          { id: "nbg-ac-02", name: "Bahr Gel Payam", countyId: "aweil-centre-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Aroyo", "Bar Mayen", "Khor Ghana"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "aweil-east-county",
        name: "Aweil East County",
        stateId: "northern-bahr-el-ghazal",
        headquarters: "Wanyjok",
        description: "Most populous county in Northern Bahr el Ghazal, bordering the Sudan corridor (Darfur / Kordofan).",
        keySectors: ["Cross-border Trade", "Livestock Breeding", "Groundnuts"],
        payams: [
          { id: "nbg-ae-01", name: "Wanyjok Payam", countyId: "aweil-east-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Wanyjok Boma", "Malualkon", "Madhol"], estimatedBomasCount: 7 },
          { id: "nbg-ae-02", name: "Yargot Payam", countyId: "aweil-east-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Yargot Central", "Mangar Tong", "Baac"], estimatedBomasCount: 6 },
          { id: "nbg-ae-03", name: "Baac Payam", countyId: "aweil-east-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Baac Boma", "Maper Akot", "Warawar Market"], estimatedBomasCount: 6 }
        ]
      },
      {
        id: "aweil-north-county",
        name: "Aweil North County",
        stateId: "northern-bahr-el-ghazal",
        headquarters: "Gok Machar",
        description: "Strategic northern territory traversed by River Kiir (Bahr al-Arab) with vital seasonal grazing lands.",
        keySectors: ["Pastoralism", "Sorghum", "Gum Arabic"],
        payams: [
          { id: "nbg-an-01", name: "Gok Machar Payam", countyId: "aweil-north-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Gok Machar Boma", "Kiir Adem", "Ariath"], estimatedBomasCount: 6 },
          { id: "nbg-an-02", name: "Malual North Payam", countyId: "aweil-north-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Mayom Angok", "Maper Dut", "Aroyo Border"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "aweil-west-county",
        name: "Aweil West County",
        stateId: "northern-bahr-el-ghazal",
        headquarters: "Nyamlel",
        description: "Fertile alluvial basin along River Lol, known for rich clay soils and groundnut cultivation.",
        keySectors: ["Groundnuts", "Sorghum", "Freshwater Fisheries"],
        payams: [
          { id: "nbg-aw-01", name: "Nyamlel Payam", countyId: "aweil-west-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Nyamlel Boma", "Marial Baai", "Gomjuer"], estimatedBomasCount: 6 },
          { id: "nbg-aw-02", name: "Gomjuer Payam", countyId: "aweil-west-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Gomjuer Center", "Achana", "Wedweil"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "aweil-south-county",
        name: "Aweil South County",
        stateId: "northern-bahr-el-ghazal",
        headquarters: "Mabior Dit",
        description: "Southern plains bordering Western Bahr el Ghazal, rich in livestock and fish swamps.",
        keySectors: ["Livestock", "Wetland Fishing", "Sorghum"],
        payams: [
          { id: "nbg-as-01", name: "Mabior Dit Payam", countyId: "aweil-south-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Mabior Center", "Tieraliet", "Nyangath"], estimatedBomasCount: 5 },
          { id: "nbg-as-02", name: "Tieraliet Payam", countyId: "aweil-south-county", stateId: "northern-bahr-el-ghazal", sampleBomas: ["Tieraliet Boma", "Gakrol", "Malek Aleu"], estimatedBomasCount: 4 }
        ]
      }
    ]
  },

  {
    id: "western-bahr-el-ghazal",
    name: "Western Bahr el Ghazal State",
    capital: "Wau",
    region: "Greater Bahr el Ghazal",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Sarah Cleto Rial",
    assemblySeats: 100,
    speakerName: "Hon. Mohamad Khair",
    areaKm2: 91076,
    estimatedPopulation: "680,000",
    historicalContext: "Wau is the historic cultural, educational, and Catholic mission capital of Greater Bahr el Ghazal, featuring the magnificent Cathedral of St. Mary.",
    economicActivity: ["Livestock & Meat Packing", "Timber & Teak", "Fruit Cultivation (Mangoes, Papayas)", "Cross-border Trade with CAR & Sudan"],
    counties: [
      {
        id: "wau-county",
        name: "Wau County & Municipality",
        stateId: "western-bahr-el-ghazal",
        headquarters: "Wau City / Baggari",
        countyType: "City Council / Municipality",
        description: "South Sudan's second largest urban and cultural metropolis, situated along River Jur.",
        keySectors: ["Urban Commerce", "Higher Education (University of Bahr el Ghazal)", "Rail Logistics"],
        payams: [
          { id: "wbg-w-01", name: "Wau South Payam", countyId: "wau-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Hai Kosti", "Hai Nazareth", "Kator Wau", "Hai Jebel"], estimatedBomasCount: 6 },
          { id: "wbg-w-02", name: "Wau North Payam", countyId: "wau-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Hai Cinema", "Hai Dinka", "Hai Salam", "Lokoloko"], estimatedBomasCount: 6 },
          { id: "wbg-w-03", name: "Baggari Payam", countyId: "wau-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Baggari Center", "Bussere", "Farajallah"], estimatedBomasCount: 5 },
          { id: "wbg-w-04", name: "Besselia Payam", countyId: "wau-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Besselia Center", "Bringi", "Momoi"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "jur-river-county",
        name: "Jur River County",
        stateId: "western-bahr-el-ghazal",
        headquarters: "Nyinakok",
        description: "Surrounds Wau along the Jur River basin, predominantly inhabited by the Luo (Jo-Luo) community, famous for iron-smelting heritage.",
        keySectors: ["Sorghum & Sesame", "River Fisheries", "Iron Craft & Charcoal"],
        payams: [
          { id: "wbg-jr-01", name: "Nyinakok Payam", countyId: "jur-river-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Nyinakok Boma", "Rocrocdong", "Marial Bai"], estimatedBomasCount: 6 },
          { id: "wbg-jr-02", name: "Kangi Payam", countyId: "jur-river-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Kangi Boma", "Udici", "Khorana"], estimatedBomasCount: 5 },
          { id: "wbg-jr-03", name: "Kuajiena Payam", countyId: "jur-river-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Kuajiena Center", "Thuragok", "Alel"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "raja-county",
        name: "Raja County",
        stateId: "western-bahr-el-ghazal",
        headquarters: "Raja Town",
        description: "South Sudan's largest county by geographic area, bordering Darfur (Sudan) and the Central African Republic with vast copper and mineral reserves.",
        keySectors: ["Mineral Reserves (Copper/Gold at Hofrat en-Nahas)", "Timber", "Honey & Gum"],
        payams: [
          { id: "wbg-r-01", name: "Raja Town Payam", countyId: "raja-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Raja Central", "Timsah", "Boro Medina"], estimatedBomasCount: 6 },
          { id: "wbg-r-02", name: "Deim Zubeir Payam", countyId: "raja-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Deim Zubeir Boma", "Sopo", "Ringi"], estimatedBomasCount: 5 },
          { id: "wbg-r-03", name: "Boro Medina Payam", countyId: "raja-county", stateId: "western-bahr-el-ghazal", sampleBomas: ["Boro Medina Center", "Mangayat", "Kafia Kingi Corridor"], estimatedBomasCount: 5 }
        ]
      }
    ]
  },

  {
    id: "warrap",
    name: "Warrap State",
    capital: "Kuajok",
    region: "Greater Bahr el Ghazal",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Kuol Muor Muor",
    assemblySeats: 100,
    speakerName: "Hon. Kuec Deng Mayar",
    areaKm2: 45567,
    estimatedPopulation: "1,550,000",
    historicalContext: "Home state of President Salva Kiir Mayardit. Renowned for massive cattle wealth, rich pastoral traditions, and vibrant cultural dances.",
    economicActivity: ["Cattle & Livestock Herding", "Sorghum & Groundnut Farming", "Fisheries along Jur & Tonj Rivers"],
    counties: [
      {
        id: "gogrial-west-county",
        name: "Gogrial West County",
        stateId: "warrap",
        headquarters: "Kuajok / Gogrial Town",
        description: "Hosts the state capital Kuajok along the Wau-Kuajok highway, known for agricultural productivity.",
        keySectors: ["Civic Administration", "Livestock Trading", "Sorghum"],
        payams: [
          { id: "war-gw-01", name: "Kuajok Town Payam", countyId: "gogrial-west-county", stateId: "warrap", sampleBomas: ["Kuajok Center", "Mayom Tot", "Khor Abulo"], estimatedBomasCount: 6 },
          { id: "war-gw-02", name: "Gogrial Payam", countyId: "gogrial-west-county", stateId: "warrap", sampleBomas: ["Gogrial Town", "Akon", "Alek"], estimatedBomasCount: 6 },
          { id: "war-gw-03", name: "Akon Payam", countyId: "gogrial-west-county", stateId: "warrap", sampleBomas: ["Akon North", "Akon South", "Panacier"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "gogrial-east-county",
        name: "Gogrial East County",
        stateId: "warrap",
        headquarters: "Lietnhom",
        description: "Situated in the central clay plains of Warrap, noted for large seasonal cattle camps.",
        keySectors: ["Pastoralism", "Sorghum", "Freshwater Fish"],
        payams: [
          { id: "war-ge-01", name: "Lietnhom Payam", countyId: "gogrial-east-county", stateId: "warrap", sampleBomas: ["Lietnhom Center", "Mayenjur", "Pathuon"], estimatedBomasCount: 5 },
          { id: "war-ge-02", name: "Nyang Payam", countyId: "gogrial-east-county", stateId: "warrap", sampleBomas: ["Nyang Center", "Panyiing", "Atooc"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "twic-county",
        name: "Twic County",
        stateId: "warrap",
        headquarters: "Mayen Abun / Turalei",
        description: "Famous as the ancestral home of NBA basketball legend Manute Bol. Bordering the Abyei Special Administrative Area.",
        keySectors: ["Livestock", "Agriculture", "Transit Commerce"],
        payams: [
          { id: "war-tw-01", name: "Turalei Payam", countyId: "twic-county", stateId: "warrap", sampleBomas: ["Turalei Center", "Majak Kol", "Panliet"], estimatedBomasCount: 6 },
          { id: "war-tw-02", name: "Mayen Abun Payam", countyId: "twic-county", stateId: "warrap", sampleBomas: ["Mayen Abun Town", "Ajak Kuac", "Aweng"], estimatedBomasCount: 6 },
          { id: "war-tw-03", name: "Ajak Kuac Payam", countyId: "twic-county", stateId: "warrap", sampleBomas: ["Ajak Kuac Boma", "Akoc", "Wunrok"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "tonj-north-county",
        name: "Tonj North County",
        stateId: "warrap",
        headquarters: "Warrap Town",
        description: "Hosts the historic town of Warrap, the original administrative center of the region.",
        keySectors: ["Livestock Herding", "Sorghum", "Traditional Justice Courts"],
        payams: [
          { id: "war-tn-01", name: "Warrap Town Payam", countyId: "tonj-north-county", stateId: "warrap", sampleBomas: ["Warrap Center", "Manaloor", "Kirik"], estimatedBomasCount: 5 },
          { id: "war-tn-02", name: "Alabek Payam", countyId: "tonj-north-county", stateId: "warrap", sampleBomas: ["Alabek Boma", "Rualbet", "Awul"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "tonj-south-county",
        name: "Tonj South County",
        stateId: "warrap",
        headquarters: "Tonj Town",
        description: "Historic commercial hub along River Tonj, connecting Bahr el Ghazal to Lakes and Equatoria.",
        keySectors: ["Trade Hub", "Cattle Markets", "River Transport"],
        payams: [
          { id: "war-ts-01", name: "Tonj Town Payam", countyId: "tonj-south-county", stateId: "warrap", sampleBomas: ["Tonj Central", "Manyangok", "Thiet"], estimatedBomasCount: 6 },
          { id: "war-ts-02", name: "Thiet Payam", countyId: "tonj-south-county", stateId: "warrap", sampleBomas: ["Thiet Boma", "Jak", "Waratit"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "tonj-east-county",
        name: "Tonj East County",
        stateId: "warrap",
        headquarters: "Ananatak",
        description: "Pastoralist frontier characterized by extensive savannah grazing lands.",
        keySectors: ["Livestock", "Pastoralism", "Sorghum"],
        payams: [
          { id: "war-te-01", name: "Ananatak Payam", countyId: "tonj-east-county", stateId: "warrap", sampleBomas: ["Ananatak Boma", "Makuac", "Paliang"], estimatedBomasCount: 5 }
        ]
      }
    ]
  },

  {
    id: "lakes",
    name: "Lakes State",
    capital: "Rumbek",
    region: "Greater Bahr el Ghazal",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Gen. Rin Tueny Mabor",
    assemblySeats: 100,
    speakerName: "Hon. Agum Jacob Chagai",
    areaKm2: 43595,
    estimatedPopulation: "1,150,000",
    historicalContext: "Rumbek hosted the first secondary school in southern Sudan (Rumbek Senior Secondary) where many national leaders were educated. A critical junction between Equatoria and Upper Nile.",
    economicActivity: ["Livestock & Cattle Trading", "Honey Harvesting", "Fishing in Lake Yirol & Lake Nyubor", "Groundnut Cultivation"],
    counties: [
      {
        id: "rumbek-centre-county",
        name: "Rumbek Centre County",
        stateId: "lakes",
        headquarters: "Rumbek Town",
        description: "Historical academic and political epicenter of Southern Sudan's civil struggle, famous for Freedom Square.",
        keySectors: ["Commercial Trade", "Secondary & Tertiary Education", "Livestock Exchanges"],
        payams: [
          { id: "lak-rc-01", name: "Rumbek Town Payam", countyId: "rumbek-centre-county", stateId: "lakes", sampleBomas: ["Hai Cinema", "Mabor Duang", "Mayom", "Pacong"], estimatedBomasCount: 6 },
          { id: "lak-rc-02", name: "Matangai Payam", countyId: "rumbek-centre-county", stateId: "lakes", sampleBomas: ["Matangai Boma", "Meen", "Ameeth"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "rumbek-east-county",
        name: "Rumbek East County",
        stateId: "lakes",
        headquarters: "Aduel",
        description: "Agricultural heartland famed for producing large quantities of groundnuts and sesame.",
        keySectors: ["Groundnut Oil", "Sorghum", "Livestock"],
        payams: [
          { id: "lak-re-01", name: "Aduel Payam", countyId: "rumbek-east-county", stateId: "lakes", sampleBomas: ["Aduel Center", "Atiaba", "Akot"], estimatedBomasCount: 6 },
          { id: "lak-re-02", name: "Akot Payam", countyId: "rumbek-east-county", stateId: "lakes", sampleBomas: ["Akot Town", "Paloch", "Maleng Agok"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "rumbek-north-county",
        name: "Rumbek North County",
        stateId: "lakes",
        headquarters: "Meen",
        description: "Northern pastoral frontier bordering Unity State, marked by expansive swamp wetlands.",
        keySectors: ["Cattle Camps", "Sudd Wetlands Fishing", "Livestock Trade"],
        payams: [
          { id: "lak-rn-01", name: "Meen Payam", countyId: "rumbek-north-county", stateId: "lakes", sampleBomas: ["Meen Center", "Mayen", "Madol"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "wulu-county",
        name: "Wulu County",
        stateId: "lakes",
        headquarters: "Wulu Center",
        description: "Nestled in heavy mahogany woodlands, home to the Beli and Jur Beli communities, celebrated for high-grade honey.",
        keySectors: ["Forest Honey", "Teak & Mahogany", "Cassava"],
        payams: [
          { id: "lak-wu-01", name: "Wulu Payam", countyId: "wulu-county", stateId: "lakes", sampleBomas: ["Wulu Town", "Domoloto", "Bargu"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "yirol-west-county",
        name: "Yirol West County",
        stateId: "lakes",
        headquarters: "Yirol Town",
        description: "Scenic lakeside county along Lake Yirol with rich freshwater fisheries and pastoral camps.",
        keySectors: ["Lake Fisheries", "Cattle Breeding", "Sorghum"],
        payams: [
          { id: "lak-yw-01", name: "Yirol Town Payam", countyId: "yirol-west-county", stateId: "lakes", sampleBomas: ["Yirol Center", "Aluakluak", "Mapuordit"], estimatedBomasCount: 6 },
          { id: "lak-yw-02", name: "Aluakluak Payam", countyId: "yirol-west-county", stateId: "lakes", sampleBomas: ["Aluakluak Boma", "Geer", "Abeeri"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "yirol-east-county",
        name: "Yirol East County",
        stateId: "lakes",
        headquarters: "Nyang",
        description: "Wetland region bordering the White Nile and Sudd, offering immense fishing reserves.",
        keySectors: ["Wetland Fishing", "Pastoralism", "Sorghum"],
        payams: [
          { id: "lak-ye-01", name: "Nyang Payam", countyId: "yirol-east-county", stateId: "lakes", sampleBomas: ["Nyang Boma", "Adior", "Yali"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "awerial-county",
        name: "Awerial County",
        stateId: "lakes",
        headquarters: "Mingkaman / Bunagok",
        description: "Situated on the western bank of the White Nile across from Bor, famous for Mingkaman river port.",
        keySectors: ["River Nile Port Commerce", "Fisheries", "Pastoralism"],
        payams: [
          { id: "lak-aw-01", name: "Mingkaman Payam", countyId: "awerial-county", stateId: "lakes", sampleBomas: ["Mingkaman Port", "Bunagok", "Dor"], estimatedBomasCount: 6 }
        ]
      },
      {
        id: "cueibet-county",
        name: "Cueibet County",
        stateId: "lakes",
        headquarters: "Cueibet Town",
        description: "Western gateway county bordering Warrap, known for its fierce pastoral traditions and rich clay soils.",
        keySectors: ["Livestock", "Cereal Farming", "Customary Courts"],
        payams: [
          { id: "lak-cu-01", name: "Cueibet Payam", countyId: "cueibet-county", stateId: "lakes", sampleBomas: ["Cueibet Town", "Mayath", "Abiriu"], estimatedBomasCount: 5 }
        ]
      }
    ]
  },

  // ================= GREATER UPPER NILE =================
  {
    id: "jonglei",
    name: "Jonglei State",
    capital: "Bor",
    region: "Greater Upper Nile",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Mahjoub Biel Biel",
    assemblySeats: 100,
    speakerName: "Hon. Amer Ateny Alier",
    areaKm2: 80926,
    estimatedPopulation: "1,850,000",
    historicalContext: "Cradle of the historic 1983 Bor Mutiny led by Dr. John Garang de Mabior. Home to the unfinished Jonglei Canal and the vast Sudd swamps.",
    economicActivity: ["Cattle Pastoralism", "Sudd Wetland Fisheries", "River Navigation", "Gum Arabic"],
    counties: [
      {
        id: "bor-county",
        name: "Bor County",
        stateId: "jonglei",
        headquarters: "Bor Town",
        description: "State capital along the White Nile with port terminals, cultural heritage sites, and major trade routes to Juba.",
        keySectors: ["River Logistics", "Livestock Trading", "Commerce"],
        payams: [
          { id: "jon-bo-01", name: "Bor Town Payam", countyId: "bor-county", stateId: "jonglei", sampleBomas: ["Marol Market", "Pakwau", "Langbar", "Machakos"], estimatedBomasCount: 6 },
          { id: "jon-bo-02", name: "Makuach Payam", countyId: "bor-county", stateId: "jonglei", sampleBomas: ["Makuach Center", "Kapat", "Werkok"], estimatedBomasCount: 5 },
          { id: "jon-bo-03", name: "Anyidi Payam", countyId: "bor-county", stateId: "jonglei", sampleBomas: ["Anyidi Center", "Chueikeer", "Mareng"], estimatedBomasCount: 5 },
          { id: "jon-bo-04", name: "Kolnyang Payam", countyId: "bor-county", stateId: "jonglei", sampleBomas: ["Kolnyang Center", "Pariak", "Abeidat"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "twic-east-county",
        name: "Twic East County",
        stateId: "jonglei",
        headquarters: "Panyagoor",
        description: "Birthplace of Dr. John Garang (Wangulei), traversing the dyke networks in the heart of the floodplains.",
        keySectors: ["Livestock", "Floodplain Fisheries", "Sorghum"],
        payams: [
          { id: "jon-te-01", name: "Panyagoor Payam", countyId: "twic-east-county", stateId: "jonglei", sampleBomas: ["Panyagoor Center", "Kongor", "Wangulei"], estimatedBomasCount: 6 },
          { id: "jon-te-02", name: "Nyuak Payam", countyId: "twic-east-county", stateId: "jonglei", sampleBomas: ["Maar", "Paliau", "Lith"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "duk-county",
        name: "Duk County",
        stateId: "jonglei",
        headquarters: "Duk Padiet",
        description: "Historically famous for the Lost Boys of Sudan and the pioneering Duk Lost Boys Clinic.",
        keySectors: ["Livestock", "Sorghum", "Pastoralism"],
        payams: [
          { id: "jon-du-01", name: "Duk Padiet Payam", countyId: "duk-county", stateId: "jonglei", sampleBomas: ["Padiet Boma", "Payuel", "Ageer"], estimatedBomasCount: 5 },
          { id: "jon-du-02", name: "Duk Payuel Payam", countyId: "duk-county", stateId: "jonglei", sampleBomas: ["Payuel Center", "Poktap", "Panyang"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "akobo-county",
        name: "Akobo County",
        stateId: "jonglei",
        headquarters: "Akobo Town",
        description: "Eastern border county along the Pibor and Akobo rivers facing Ethiopia, inhabited predominantly by the Lou Nuer.",
        keySectors: ["Cross-Border Trade with Gambella", "Fisheries", "Pastoralism"],
        payams: [
          { id: "jon-ak-01", name: "Akobo Central Payam", countyId: "akobo-county", stateId: "jonglei", sampleBomas: ["Akobo Town", "Dier", "Ter"], estimatedBomasCount: 5 },
          { id: "jon-ak-02", name: "Bilkey Payam", countyId: "akobo-county", stateId: "jonglei", sampleBomas: ["Bilkey Boma", "Nyandit", "Gulu"], estimatedBomasCount: 5 },
          { id: "jon-ak-03", name: "Nyandit Payam", countyId: "akobo-county", stateId: "jonglei", sampleBomas: ["Nyandit Center", "Alale", "Kare"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "uror-county",
        name: "Uror County",
        stateId: "jonglei",
        headquarters: "Yuai",
        description: "Central Lou Nuer territory characterized by expansive grazing plains and traditional council assemblies.",
        keySectors: ["Livestock", "Sorghum", "Honey"],
        payams: [
          { id: "jon-ur-01", name: "Yuai Payam", countyId: "uror-county", stateId: "jonglei", sampleBomas: ["Yuai Town", "Mothep", "Pieri"], estimatedBomasCount: 5 },
          { id: "jon-ur-02", name: "Pieri Payam", countyId: "uror-county", stateId: "jonglei", sampleBomas: ["Pieri Center", "Pulchuol", "Pathai"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "nyirol-county",
        name: "Nyirol County",
        stateId: "jonglei",
        headquarters: "Lankien",
        description: "Noted for the major medical humanitarian hub at Lankien and traditional veterinary networks.",
        keySectors: ["Livestock", "Sorghum", "Pastoralism"],
        payams: [
          { id: "jon-ny-01", name: "Lankien Payam", countyId: "nyirol-county", stateId: "jonglei", sampleBomas: ["Lankien Center", "Waat", "Pading"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "ayod-county",
        name: "Ayod County",
        stateId: "jonglei",
        headquarters: "Ayod Center",
        description: "Home of the Gawaar Nuer community, with vast seasonal pasturelands.",
        keySectors: ["Pastoralism", "Livestock Trading", "Sorghum"],
        payams: [
          { id: "jon-ay-01", name: "Ayod Payam", countyId: "ayod-county", stateId: "jonglei", sampleBomas: ["Ayod Town", "Kandak", "Mogok", "Wau"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "fangak-county",
        name: "Fangak County",
        stateId: "jonglei",
        headquarters: "Old Fangak / New Fangak",
        description: "Vast wetland county along the Phow River in the Sudd, accessible primarily by boat or plane.",
        keySectors: ["River Transport", "Freshwater Fish", "Pastoralism"],
        payams: [
          { id: "jon-fa-01", name: "Old Fangak Payam", countyId: "fangak-county", stateId: "jonglei", sampleBomas: ["Old Fangak Town", "Manajang", "Pangwir"], estimatedBomasCount: 5 },
          { id: "jon-fa-02", name: "New Fangak Payam", countyId: "fangak-county", stateId: "jonglei", sampleBomas: ["New Fangak Center", "Barboy", "Pulita"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "canal-pigi-county",
        name: "Canal / Pigi County",
        stateId: "jonglei",
        headquarters: "Khorfulus",
        description: "Junction where the Sobat River meets the White Nile and the head of the Jonglei Canal.",
        keySectors: ["River Navigation", "Fisheries", "Pastoralism"],
        payams: [
          { id: "jon-cp-01", name: "Khorfulus Payam", countyId: "canal-pigi-county", stateId: "jonglei", sampleBomas: ["Khorfulus Town", "Canal Mouth", "Diel"], estimatedBomasCount: 5 }
        ]
      }
    ]
  },

  {
    id: "unity",
    name: "Unity State",
    capital: "Bentiu",
    region: "Greater Upper Nile",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. Justice Riek Bim Top",
    assemblySeats: 100,
    speakerName: "Hon. Ngundeng Gatkuoth",
    areaKm2: 37836,
    estimatedPopulation: "1,100,000",
    historicalContext: "Major petroleum-producing heartland (Block 1A/1B, Unity Oil Fields). Traversed by the Bahr el Ghazal river and extensive Sudd marshes.",
    economicActivity: ["Petroleum & Crude Oil Extraction", "Livestock & Dairy", "Sudd Wetland Fisheries", "Trade"],
    counties: [
      {
        id: "rubkona-county",
        name: "Rubkona County",
        stateId: "unity",
        headquarters: "Bentiu / Rubkona",
        description: "Encompasses Bentiu state capital and Rubkona twin town, bridged across the Bahr el Ghazal river.",
        keySectors: ["Petroleum Logistics", "Government Operations", "Commercial Market"],
        payams: [
          { id: "uni-ru-01", name: "Bentiu Town Payam", countyId: "rubkona-county", stateId: "unity", sampleBomas: ["Bentiu Center", "Hai Salam", "Bieh", "Liek"], estimatedBomasCount: 6 },
          { id: "uni-ru-02", name: "Rubkona Town Payam", countyId: "rubkona-county", stateId: "unity", sampleBomas: ["Rubkona Market", "Dhorbor", "Nhialdiu Road"], estimatedBomasCount: 6 },
          { id: "uni-ru-03", name: "Nhialdiu Payam", countyId: "rubkona-county", stateId: "unity", sampleBomas: ["Nhialdiu Center", "Kuermandoke", "Chuil"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "mayom-county",
        name: "Mayom County",
        stateId: "unity",
        headquarters: "Mayom Town",
        description: "Western gateway county bordering Warrap and Sudan (Southern Kordofan), known for large cattle herds.",
        keySectors: ["Pastoralism", "Cross-border Trade", "Oil Fields"],
        payams: [
          { id: "uni-ma-01", name: "Mayom Central Payam", countyId: "mayom-county", stateId: "unity", sampleBomas: ["Mayom Town", "Mankien", "Riak"], estimatedBomasCount: 6 },
          { id: "uni-ma-02", name: "Mankien Payam", countyId: "mayom-county", stateId: "unity", sampleBomas: ["Mankien Center", "Wangkai", "Tam"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "guit-county",
        name: "Guit County",
        stateId: "unity",
        headquarters: "Guit Center",
        description: "Hosts key oil pipeline infrastructure and fertile agricultural wetlands.",
        keySectors: ["Petroleum Transit", "Pastoralism", "Fisheries"],
        payams: [
          { id: "uni-gu-01", name: "Guit Payam", countyId: "guit-county", stateId: "unity", sampleBomas: ["Guit Center", "Kech", "Kuergueng"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "koch-county",
        name: "Koch County",
        stateId: "unity",
        headquarters: "Koch Center",
        description: "Located between Rubkona and Leer, containing oil concessions and seasonal grazing routes.",
        keySectors: ["Petroleum", "Livestock", "Sorghum"],
        payams: [
          { id: "uni-ko-01", name: "Koch Payam", countyId: "koch-county", stateId: "unity", sampleBomas: ["Koch Town", "Boaw", "Mirmir", "Kuach"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "leer-county",
        name: "Leer County",
        stateId: "unity",
        headquarters: "Leer Town",
        description: "Historically prominent town in Dok Nuer territory, birthplace of Dr. Riek Machar.",
        keySectors: ["Pastoralism", "Fisheries", "Agriculture"],
        payams: [
          { id: "uni-le-01", name: "Leer Payam", countyId: "leer-county", stateId: "unity", sampleBomas: ["Leer Town", "Adok Port", "Pilieny", "Thony"], estimatedBomasCount: 6 },
          { id: "uni-le-02", name: "Adok Payam", countyId: "leer-county", stateId: "unity", sampleBomas: ["Adok River Port", "Dhorwang", "Padeah"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "mayendit-county",
        name: "Mayendit County",
        stateId: "unity",
        headquarters: "Mayendit Center",
        description: "Deep in the southern Sudd wetlands, highly rich in catfish and seasonal grazing islands.",
        keySectors: ["Freshwater Fish", "Pastoralism", "Sorghum"],
        payams: [
          { id: "uni-md-01", name: "Mayendit South Payam", countyId: "mayendit-county", stateId: "unity", sampleBomas: ["Mayendit Boma", "Rubkuay", "Dablual"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "payinjiar-county",
        name: "Payinjiar (Panyijiar) County",
        stateId: "unity",
        headquarters: "Ganyliel / Nyal",
        description: "Southernmost county of Unity surrounded by the great papyrus swamps of the Sudd, renowned for island communities.",
        keySectors: ["Fisheries & Smoked Fish", "Cattle", "Waterlily Harvesting"],
        payams: [
          { id: "uni-pa-01", name: "Ganyliel Payam", countyId: "payinjiar-county", stateId: "unity", sampleBomas: ["Ganyliel Port", "Tiap", "Chuil"], estimatedBomasCount: 6 },
          { id: "uni-pa-02", name: "Nyal Payam", countyId: "payinjiar-county", stateId: "unity", sampleBomas: ["Nyal Town", "Kol", "Paloil"], estimatedBomasCount: 5 }
        ]
      }
    ]
  },

  {
    id: "upper-nile",
    name: "Upper Nile State",
    capital: "Malakal",
    region: "Greater Upper Nile",
    isSpecialAdministrativeArea: false,
    governorOrAdminTitle: "Governor",
    currentLeaderName: "Hon. James Odhok Oyay",
    assemblySeats: 100,
    speakerName: "Hon. Chuol Dep Kier",
    areaKm2: 77823,
    estimatedPopulation: "1,500,000",
    historicalContext: "Malakal is the historic cosmopolis of Upper Nile where the White Nile and Sobat rivers meet. Renowned for the Kingdom of Fashoda (Reth of Shilluk) and massive crude oil fields in Paloch.",
    economicActivity: ["Paloch & Melut Petroleum Fields", "Mechanized Sorghum & Sesame Farming (Renk)", "White Nile & Sobat Navigation", "Fisheries"],
    counties: [
      {
        id: "malakal-county",
        name: "Malakal County & Municipality",
        stateId: "upper-nile",
        headquarters: "Malakal City",
        countyType: "City Council / Municipality",
        description: "State capital on the eastern bank of the White Nile with port docks, airport, and diverse multi-ethnic history.",
        keySectors: ["River Logistics", "State Administration", "Commercial Trade"],
        payams: [
          { id: "un-ma-01", name: "Malakal Central Payam", countyId: "malakal-county", stateId: "upper-nile", sampleBomas: ["Hai Matar", "Hai Jalaba", "Hai Malakia", "Sobat Road"], estimatedBomasCount: 6 },
          { id: "un-ma-02", name: "Ogod Payam", countyId: "malakal-county", stateId: "upper-nile", sampleBomas: ["Ogod Boma", "Wau Shilluk Link", "Lul"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "renk-county",
        name: "Renk County",
        stateId: "upper-nile",
        headquarters: "Renk Town",
        description: "Northernmost agricultural powerhouse of South Sudan; possesses millions of feddans of mechanized sorghum and sesame schemes.",
        keySectors: ["Mechanized Agriculture", "Cross-Border Trade with Sudan (Kosti)", "River Port"],
        payams: [
          { id: "un-re-01", name: "Renk Payam", countyId: "renk-county", stateId: "upper-nile", sampleBomas: ["Renk Town", "Joda Border", "Wunthow", "Abayok"], estimatedBomasCount: 6 },
          { id: "un-re-02", name: "Jalhak Payam", countyId: "renk-county", stateId: "upper-nile", sampleBomas: ["Jalhak Center", "Gereiger", "Shamdi"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "melut-county",
        name: "Melut County",
        stateId: "upper-nile",
        headquarters: "Melut Town",
        description: "Epicenter of South Sudan's oil wealth; home to the giant Paloch oil fields and central processing facilities.",
        keySectors: ["Petroleum Extraction (Dar Petroleum)", "Refinery Logistics", "River Fisheries"],
        payams: [
          { id: "un-me-01", name: "Melut Payam", countyId: "melut-county", stateId: "upper-nile", sampleBomas: ["Melut Town", "Paloch Oil Boma", "Thalo", "Galdora"], estimatedBomasCount: 6 },
          { id: "un-me-02", name: "Paloch Payam", countyId: "melut-county", stateId: "upper-nile", sampleBomas: ["Paloch Central", "Adar Yale", "Agordit"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "fashoda-county",
        name: "Fashoda (Kodok) County",
        stateId: "upper-nile",
        headquarters: "Kodok",
        description: "Sacred cultural capital of the historic Chollo (Shilluk) Kingdom, seat of the Reth (King) of Fashoda.",
        keySectors: ["Chollo Cultural Royalty", "River Agriculture", "Fisheries"],
        payams: [
          { id: "un-fa-01", name: "Kodok Payam", countyId: "fashoda-county", stateId: "upper-nile", sampleBomas: ["Kodok Central", "Fashoda Royal Compound", "Delal"], estimatedBomasCount: 5 },
          { id: "un-fa-02", name: "Lul Payam", countyId: "fashoda-county", stateId: "upper-nile", sampleBomas: ["Lul Mission", "Panyidwai", "Ochum"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "manyo-county",
        name: "Manyo County",
        stateId: "upper-nile",
        headquarters: "Wadakona",
        description: "Western river bank county opposite Renk, with rich gum arabic and sorghum farms.",
        keySectors: ["Sorghum", "Gum Arabic", "River Fishing"],
        payams: [
          { id: "un-mn-01", name: "Wadakona Payam", countyId: "manyo-county", stateId: "upper-nile", sampleBomas: ["Wadakona Boma", "Kaka Town", "Athidwoi"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "panyikang-county",
        name: "Panyikang County",
        stateId: "upper-nile",
        headquarters: "Tonga",
        description: "Southern Chollo county hosting the strategic river port of Tonga at the mouth of the Zeraf.",
        keySectors: ["Tonga River Port", "Fisheries", "Agriculture"],
        payams: [
          { id: "un-pk-01", name: "Tonga Payam", countyId: "panyikang-county", stateId: "upper-nile", sampleBomas: ["Tonga Port", "Pakang", "Nyillieny"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "baliet-county",
        name: "Baliet County",
        stateId: "upper-nile",
        headquarters: "Baliet Center",
        description: "Traversed by River Sobat, home to the Padang Dinka community with rich farming along riverbanks.",
        keySectors: ["Sobat Agriculture", "Livestock", "Fisheries"],
        payams: [
          { id: "un-ba-01", name: "Baliet Payam", countyId: "baliet-county", stateId: "upper-nile", sampleBomas: ["Baliet Boma", "Adong", "Abwong"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "nasir-county",
        name: "Nasir (Luakpiny) County",
        stateId: "upper-nile",
        headquarters: "Nasir Town",
        description: "Historic town along River Sobat near the Ethiopian border; focal point of modern South Sudanese political history (1991 Nasir Declaration).",
        keySectors: ["Sobat River Navigation", "Livestock", "Trade with Ethiopia"],
        payams: [
          { id: "un-na-01", name: "Nasir Central Payam", countyId: "nasir-county", stateId: "upper-nile", sampleBomas: ["Nasir Town", "Kier", "Dinding", "Kuetreke"], estimatedBomasCount: 6 },
          { id: "un-na-02", name: "Jikmir Payam", countyId: "nasir-county", stateId: "upper-nile", sampleBomas: ["Jikmir Center", "Maker", "Mandeng"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "ulang-county",
        name: "Ulang County",
        stateId: "upper-nile",
        headquarters: "Ulang Town",
        description: "Situated on the Sobat river between Baliet and Nasir, heavily reliant on livestock and river fisheries.",
        keySectors: ["Pastoralism", "River Fisheries", "Sorghum"],
        payams: [
          { id: "un-ul-01", name: "Ulang Payam", countyId: "ulang-county", stateId: "upper-nile", sampleBomas: ["Ulang Boma", "Yomding", "Doma"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "maban-county",
        name: "Maban County",
        stateId: "upper-nile",
        headquarters: "Bunj",
        description: "Northeastern county bordering Blue Nile (Sudan) and Ethiopia, home to the Maban people and major refugee settlement programs.",
        keySectors: ["Agriculture", "Humanitarian Services", "Sesame & Sorghum"],
        payams: [
          { id: "un-mb-01", name: "Bunj Payam", countyId: "maban-county", stateId: "upper-nile", sampleBomas: ["Bunj Town", "Doro", "Batil", "Gendrassa"], estimatedBomasCount: 6 }
        ]
      },
      {
        id: "maiwut-county",
        name: "Maiwut County",
        stateId: "upper-nile",
        headquarters: "Maiwut Center",
        description: "Border territory bordering Ethiopia, rich in agricultural wetlands and cross-border cultural links.",
        keySectors: ["Agriculture", "Cross-Border Trade", "Pastoralism"],
        payams: [
          { id: "un-mw-01", name: "Maiwut Payam", countyId: "maiwut-county", stateId: "upper-nile", sampleBomas: ["Maiwut Boma", "Pagak Border", "Uleng"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "longochuk-county",
        name: "Longochuk County",
        stateId: "upper-nile",
        headquarters: "Mathiang",
        description: "Nestled along the eastern plains between Maiwut and Ulang.",
        keySectors: ["Pastoralism", "Sorghum Farming", "Livestock"],
        payams: [
          { id: "un-lo-01", name: "Mathiang Payam", countyId: "longochuk-county", stateId: "upper-nile", sampleBomas: ["Mathiang Boma", "Dajo", "Malual"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "akoka-county",
        name: "Akoka County",
        stateId: "upper-nile",
        headquarters: "Akoka Center",
        description: "Along the eastern bank of the White Nile between Baliet and Melut.",
        keySectors: ["River Fisheries", "Sorghum", "Livestock"],
        payams: [
          { id: "un-ak-01", name: "Akoka Payam", countyId: "akoka-county", stateId: "upper-nile", sampleBomas: ["Akoka Center", "Rom", "Banykier"], estimatedBomasCount: 4 }
        ]
      }
    ]
  },

  // ================= 3 SPECIAL ADMINISTRATIVE AREAS =================
  {
    id: "abyei-area",
    name: "Abyei Special Administrative Area",
    capital: "Abyei Town",
    region: "Greater Bahr el Ghazal",
    isSpecialAdministrativeArea: true,
    governorOrAdminTitle: "Chief Administrator",
    currentLeaderName: "Hon. Dr. Chol Deng Alak",
    assemblySeats: 35, // Administrative Area Council
    speakerName: "Rt. Hon. Council Speaker",
    areaKm2: 10546,
    estimatedPopulation: "300,000",
    historicalContext: "Special territorial status established under the Abyei Protocol of the 2005 Comprehensive Peace Agreement (CPA). Home of the nine Ngok Dinka chiefdoms.",
    economicActivity: ["Livestock & Cattle Herding", "Sorghum & Sesame", "Cross-border Trade", "Crude Oil (Diffra fields)"],
    counties: [
      {
        id: "abyei-town-unit",
        name: "Abyei Town Municipality",
        stateId: "abyei-area",
        headquarters: "Abyei Town",
        countyType: "City Council / Municipality",
        description: "Administrative headquarters of the Chief Administrator and UNISFA peacekeeper headquarters.",
        keySectors: ["Public Administration", "Market Commerce", "Customary Courts"],
        payams: [
          { id: "aby-p-01", name: "Abyei Central Payam", countyId: "abyei-town-unit", stateId: "abyei-area", sampleBomas: ["Abyei Center", "Hai Cinema", "Mulmul", "Mabok"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "alal-county",
        name: "Alal County",
        stateId: "abyei-area",
        headquarters: "Alal Center",
        description: "Northwestern sector of Abyei characterized by fertile agricultural plains.",
        keySectors: ["Sorghum Farming", "Livestock", "Customary Land"],
        payams: [
          { id: "aby-p-02", name: "Alal Payam", countyId: "alal-county", stateId: "abyei-area", sampleBomas: ["Alal Boma", "Tajalei", "Kolom"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "rumamer-county",
        name: "Rumamer County",
        stateId: "abyei-area",
        headquarters: "Rumamer",
        description: "Southern sector bordering Twic County in Warrap State along River Kiir.",
        keySectors: ["Cattle Pasture", "Fisheries along River Kiir", "Sorghum"],
        payams: [
          { id: "aby-p-03", name: "Rumamer Payam", countyId: "rumamer-county", stateId: "abyei-area", sampleBomas: ["Rumamer Boma", "Abathok", "Amiet Border Market"], estimatedBomasCount: 6 }
        ]
      },
      {
        id: "mijak-county",
        name: "Mijak County",
        stateId: "abyei-area",
        headquarters: "Mijak",
        description: "Eastern chiefdom sector with expansive grasslands.",
        keySectors: ["Livestock", "Cereal Cultivation", "Traditional Chieftaincy"],
        payams: [
          { id: "aby-p-04", name: "Mijak Payam", countyId: "mijak-county", stateId: "abyei-area", sampleBomas: ["Mijak Boma", "Mading Jokthiang", "Leu"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "dungop-county",
        name: "Dungop County",
        stateId: "abyei-area",
        headquarters: "Dungop Center",
        description: "Historic chiefdom area with deep traditional leadership heritage.",
        keySectors: ["Pastoralism", "Honey", "Sorghum"],
        payams: [
          { id: "aby-p-05", name: "Dungop Payam", countyId: "dungop-county", stateId: "abyei-area", sampleBomas: ["Dungop Boma", "Noong", "Dokura"], estimatedBomasCount: 4 }
        ]
      }
    ]
  },

  {
    id: "pibor-area",
    name: "Greater Pibor Administrative Area",
    capital: "Pibor Town",
    region: "Greater Upper Nile",
    isSpecialAdministrativeArea: true,
    governorOrAdminTitle: "Chief Administrator",
    currentLeaderName: "Hon. Gola Boyoi Gola",
    assemblySeats: 35,
    speakerName: "Rt. Hon. GPAA Council Speaker",
    areaKm2: 41962,
    estimatedPopulation: "320,000",
    historicalContext: "Established as a special administrative entity to resolve regional conflict and serve Murle, Anyuak, Jie, and Kachipo communities. Hosts Boma National Park, home to the second-largest mammal migration on Earth.",
    economicActivity: ["Wildlife Tourism (Boma National Park)", "Livestock Herding", "Forestry & Honey", "Cross-Border Trade with Ethiopia"],
    counties: [
      {
        id: "pibor-county",
        name: "Pibor County",
        stateId: "pibor-area",
        headquarters: "Pibor Town",
        description: "Seat of the Chief Administrator along River Pibor, famous for traditional Murle cultural assemblies.",
        keySectors: ["Administration", "Livestock Trading", "River Navigation"],
        payams: [
          { id: "gpa-pb-01", name: "Pibor Central Payam", countyId: "pibor-county", stateId: "pibor-area", sampleBomas: ["Pibor Center", "Lekuangole Road", "Manyabol Boma"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "pochalla-county",
        name: "Pochalla County",
        stateId: "pibor-area",
        headquarters: "Pochalla Town",
        description: "Eastern agricultural heartland inhabited by the Anyuak kingdom, along the Akobo and Gilo rivers bordering Ethiopia.",
        keySectors: ["Cassava & Maize", "Royal Cultural Institutions", "Cross-Border Trade"],
        payams: [
          { id: "gpa-po-01", name: "Pochalla Central Payam", countyId: "pochalla-county", stateId: "pibor-area", sampleBomas: ["Pochalla Town", "Adongo", "Otalo"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "verteth-county",
        name: "Verteth County",
        stateId: "pibor-area",
        headquarters: "Verteth Center",
        description: "Situated between Pibor and Gumuruk, renowned for cattle grazing.",
        keySectors: ["Livestock", "Honey", "Pastoralism"],
        payams: [
          { id: "gpa-ve-01", name: "Verteth Payam", countyId: "verteth-county", stateId: "pibor-area", sampleBomas: ["Verteth Boma", "Kuron Link", "Lothila"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "gumuruk-county",
        name: "Gumuruk County",
        stateId: "pibor-area",
        headquarters: "Gumuruk",
        description: "Important pastoralist hub along River Pibor with expansive seasonal pastures.",
        keySectors: ["Livestock", "Fisheries", "Pastoralism"],
        payams: [
          { id: "gpa-gu-01", name: "Gumuruk Payam", countyId: "gumuruk-county", stateId: "pibor-area", sampleBomas: ["Gumuruk Center", "Manyabol Link", "Kongor Pibor"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "likwangole-county",
        name: "Likwangole County",
        stateId: "pibor-area",
        headquarters: "Likwangole",
        description: "Northern pastoral frontier connecting Pibor to Akobo.",
        keySectors: ["Livestock Herding", "Sorghum", "Fisheries"],
        payams: [
          { id: "gpa-li-01", name: "Likwangole Payam", countyId: "likwangole-county", stateId: "pibor-area", sampleBomas: ["Likwangole Boma", "Maruwa", "Nanaam"], estimatedBomasCount: 5 }
        ]
      },
      {
        id: "jebel-boma-county",
        name: "Jebel Boma County",
        stateId: "pibor-area",
        headquarters: "Boma Town",
        description: "Highland plateau setting of Boma National Park and the Boma hills, hosting vast antelope migrations and rich coffee plants.",
        keySectors: ["Wildlife Tourism & Eco-conservation", "Highland Agriculture", "Honey"],
        payams: [
          { id: "gpa-jb-01", name: "Boma Payam", countyId: "jebel-boma-county", stateId: "pibor-area", sampleBomas: ["Boma Hills Boma", "Kassengor Link", "Itah"], estimatedBomasCount: 5 }
        ]
      }
    ]
  },

  {
    id: "ruweng-area",
    name: "Ruweng Administrative Area",
    capital: "Pariang",
    region: "Greater Upper Nile",
    isSpecialAdministrativeArea: true,
    governorOrAdminTitle: "Chief Administrator",
    currentLeaderName: "Hon. Tiop Monyluak Dau",
    assemblySeats: 25,
    speakerName: "Rt. Hon. RAA Council Speaker",
    areaKm2: 24635,
    estimatedPopulation: "330,000",
    historicalContext: "Reconstituted as an administrative area in 2020. Home to the Panaru and Aloor communities and major crude oil blocks in Manga, Toma South, and Lalop.",
    economicActivity: ["Petroleum Production (Block 4/Toma South)", "Lake No Fisheries", "Livestock & Dairy", "Sorghum & Sesame"],
    counties: [
      {
        id: "pariang-county",
        name: "Pariang County",
        stateId: "ruweng-area",
        headquarters: "Pariang Town",
        description: "Administrative center of Ruweng, featuring oil field support infrastructure and the historic Yida settlement.",
        keySectors: ["Oil Industry Operations", "Agriculture (Sesame & Sorghum)", "Livestock"],
        payams: [
          { id: "raa-pa-01", name: "Pariang Central Payam", countyId: "pariang-county", stateId: "ruweng-area", sampleBomas: ["Pariang Town", "Yida Boma", "Manga Oil Boma", "Gumriak"], estimatedBomasCount: 6 },
          { id: "raa-pa-02", name: "Wunkur Payam", countyId: "pariang-county", stateId: "ruweng-area", sampleBomas: ["Wunkur Center", "Toma South", "Aliny"], estimatedBomasCount: 5 },
          { id: "raa-pa-03", name: "Bieth Payam", countyId: "pariang-county", stateId: "ruweng-area", sampleBomas: ["Bieth Boma", "Mankol", "Panakuach"], estimatedBomasCount: 4 }
        ]
      },
      {
        id: "abiemnhom-county",
        name: "Abiemnhom County",
        stateId: "ruweng-area",
        headquarters: "Abiemnhom Center",
        description: "Western county connecting Ruweng to Mayom in Unity and Twic in Warrap, rich in grazing savannah.",
        keySectors: ["Livestock Herding", "Sorghum Cultivation", "Trade Route"],
        payams: [
          { id: "raa-ab-01", name: "Abiemnhom Payam", countyId: "abiemnhom-county", stateId: "ruweng-area", sampleBomas: ["Abiemnhom Town", "Awila", "Bangok"], estimatedBomasCount: 5 },
          { id: "raa-ab-02", name: "Diu Payam", countyId: "abiemnhom-county", stateId: "ruweng-area", sampleBomas: ["Diu Boma", "Tharjath Link", "Maper"], estimatedBomasCount: 4 }
        ]
      }
    ]
  }
];

export const CIVIC_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How many total members constitute the Transitional National Legislative Assembly (TNLA) under the R-ARCSS 2018?",
    options: ["400 Members", "550 Members", "650 Members", "332 Members"],
    correctIndex: 1,
    explanation: "Under Chapter 1 (Section 1.14.2) of the 2018 Revitalized Peace Agreement (R-ARCSS), the TNLA was reconstituted and expanded to 550 members allocated across all peace agreement signatory parties."
  },
  {
    id: 2,
    question: "Which presiding officer made history as the first female Speaker of South Sudan's National Legislative Assembly?",
    options: ["Rt. Hon. Jemma Nunu Kumba", "Hon. Mary Ayen Majok", "Hon. Sarah Cleto Rial", "Hon. Amer Ateny Alier"],
    correctIndex: 0,
    explanation: "Rt. Hon. Jemma Nunu Kumba was elected Speaker of the Transitional National Legislative Assembly in August 2021, becoming the first woman to lead parliament in South Sudan's history."
  },
  {
    id: 3,
    question: "How many members make up the Council of States (Upper House) representing the 10 States and 3 Administrative Areas?",
    options: ["50 Members", "79 Members", "100 Members", "150 Members"],
    correctIndex: 2,
    explanation: "The Council of States was reconstituted to 100 members under R-ARCSS Article 1.14.3 to represent the interests of the 10 states and administrative areas and oversee devolution."
  },
  {
    id: 4,
    question: "What are the three recognized tiers of Local Government in South Sudan according to the Local Government Act 2009?",
    options: [
      "Province, District, and Village",
      "County, Payam, and Boma",
      "State, Municipality, and Ward",
      "Department, Canton, and Commune"
    ],
    correctIndex: 1,
    explanation: "Under Section 10 of the Local Government Act 2009, local government in South Sudan is structured into three tiers: County (primary development unit), Payam (coordinating unit), and Boma (basic community unit)."
  },
  {
    id: 5,
    question: "Which of the following is NOT one of South Sudan's Three Special Administrative Areas?",
    options: ["Abyei Area", "Greater Pibor Area", "Ruweng Area", "Nimule Area"],
    correctIndex: 3,
    explanation: "The three official Special Administrative Areas recognized in the governance framework are Abyei Special Administrative Area, Greater Pibor Administrative Area, and Ruweng Administrative Area. Nimule is a payam/county border town in Eastern Equatoria."
  },
  {
    id: 6,
    question: "What is the primary customary dispute resolution authority at the grassroots Boma level?",
    options: [
      "Customary Law Courts led by Boma Chiefs and Council of Elders",
      "National Supreme Court Judges",
      "State Governors",
      "National Revenue Authority Officers"
    ],
    correctIndex: 0,
    explanation: "At the Boma level, Section 60-75 of the Local Government Act 2009 recognizes Customary Law Courts led by Executive Chiefs, Sub-Chiefs, and elders to settle local community and civil disputes."
  }
];
