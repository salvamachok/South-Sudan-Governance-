import React, { useState, useMemo } from 'react';
import { STATES_AND_AREAS_DATA } from '../data/southSudanData';
import { StateEntity, County } from '../types';
import { ArrowLeftRight, Building, MapPin, Users, Landmark, Layers, Briefcase, FileText, ChevronRight } from 'lucide-react';

interface StateComparisonWidgetProps {
  initialStateAId?: string;
  initialStateBId?: string;
  onSelectCounty?: (stateId: string, countyId: string) => void;
}

export const StateComparisonWidget: React.FC<StateComparisonWidgetProps> = ({
  initialStateAId = 'central-equatoria',
  initialStateBId = 'jonglei',
  onSelectCounty
}) => {
  const [stateAId, setStateAId] = useState<string>(initialStateAId);
  const [stateBId, setStateBId] = useState<string>(initialStateBId);

  const stateA = useMemo(() => {
    return STATES_AND_AREAS_DATA.find(s => s.id === stateAId) || STATES_AND_AREAS_DATA[0];
  }, [stateAId]);

  const stateB = useMemo(() => {
    return STATES_AND_AREAS_DATA.find(s => s.id === stateBId) || STATES_AND_AREAS_DATA[7];
  }, [stateBId]);

  // Aggregate metrics
  const totalPayamsA = useMemo(() => {
    return stateA.counties.reduce((sum, c) => sum + c.payams.length, 0);
  }, [stateA]);

  const totalPayamsB = useMemo(() => {
    return stateB.counties.reduce((sum, c) => sum + c.payams.length, 0);
  }, [stateB]);

  const handleSwap = () => {
    setStateAId(stateBId);
    setStateBId(stateAId);
  };

  const setPreset = (idA: string, idB: string) => {
    setStateAId(idA);
    setStateBId(idB);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-8">
      {/* Header & Preset Switchers */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
            <span>Side-by-Side Territorial Analytics</span>
            <span aria-hidden="true">·</span>
            <span>Comparative Governance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-stone-900 mt-1">
            State & Administrative Area Comparative Analysis
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl font-sans-body">
            Compare executive leaders, parliamentary representation, county structures, payam counts, 
            and socio-economic profiles side-by-side across any two territorial jurisdictions.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-stone-400 font-mono mr-1">Presets:</span>
          <button
            onClick={() => setPreset('central-equatoria', 'jonglei')}
            className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors"
          >
            Juba vs Bor
          </button>
          <button
            onClick={() => setPreset('upper-nile', 'unity')}
            className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors"
          >
            Oil Heartlands (Paloch vs Bentiu)
          </button>
          <button
            onClick={() => setPreset('abyei-area', 'pibor-area')}
            className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors"
          >
            Special Areas (Abyei vs Pibor)
          </button>
        </div>
      </div>

      {/* Selectors Bar with Swap button */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-stone-50/80 p-4 rounded-lg border border-stone-200/80">
        <div className="md:col-span-5 space-y-1">
          <label className="block text-xs font-mono font-semibold uppercase text-stone-600">
            Primary State / Territory (A)
          </label>
          <select
            value={stateAId}
            onChange={(e) => setStateAId(e.target.value)}
            className="w-full text-sm font-semibold p-2.5 bg-white border border-stone-300 rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 cursor-pointer"
          >
            <optgroup label="Ten States">
              {STATES_AND_AREAS_DATA.filter(s => !s.isSpecialAdministrativeArea).map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.capital})</option>
              ))}
            </optgroup>
            <optgroup label="Three Special Administrative Areas">
              {STATES_AND_AREAS_DATA.filter(s => s.isSpecialAdministrativeArea).map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.capital})</option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            onClick={handleSwap}
            title="Swap territories"
            className="p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 shadow-xs transition-transform active:scale-95 flex items-center justify-center"
          >
            <ArrowLeftRight className="w-4 h-4 text-stone-600" />
          </button>
        </div>

        <div className="md:col-span-5 space-y-1">
          <label className="block text-xs font-mono font-semibold uppercase text-stone-600">
            Comparison State / Territory (B)
          </label>
          <select
            value={stateBId}
            onChange={(e) => setStateBId(e.target.value)}
            className="w-full text-sm font-semibold p-2.5 bg-white border border-stone-300 rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 cursor-pointer"
          >
            <optgroup label="Ten States">
              {STATES_AND_AREAS_DATA.filter(s => !s.isSpecialAdministrativeArea).map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.capital})</option>
              ))}
            </optgroup>
            <optgroup label="Three Special Administrative Areas">
              {STATES_AND_AREAS_DATA.filter(s => s.isSpecialAdministrativeArea).map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.capital})</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Side-by-Side Visual Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card A */}
        <div className="border border-stone-200 rounded-lg p-6 bg-white space-y-6">
          <div className="pb-4 border-b border-stone-100">
            <div className="flex items-center justify-between text-xs font-mono text-stone-500">
              <span>{stateA.region}</span>
              <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {stateA.isSpecialAdministrativeArea ? 'Special Admin Area' : 'Federal State'}
              </span>
            </div>
            <h4 className="text-2xl font-serif font-bold text-stone-900 mt-1">{stateA.name}</h4>
            <div className="text-xs text-stone-600 mt-1">
              Seat of Administration: <span className="font-semibold text-stone-900">{stateA.capital}</span>
            </div>
          </div>

          {/* Key Leadership Metrics */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700">
              Key Representatives & Assembly
            </h5>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">{stateA.governorOrAdminTitle}</span>
                <span className="font-bold text-stone-900 block mt-0.5">{stateA.currentLeaderName}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">Assembly Speaker</span>
                <span className="font-bold text-stone-900 block mt-0.5">{stateA.speakerName || 'Council Speaker'}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">Assembly Seats</span>
                <span className="text-lg font-serif font-bold text-amber-800 font-mono-tabular block mt-0.5">
                  {stateA.assemblySeats} Seats
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">Council of States Rep.</span>
                <span className="text-lg font-serif font-bold text-stone-900 font-mono-tabular block mt-0.5">
                  {stateA.isSpecialAdministrativeArea ? 'Special Deleg.' : 'State Senators'}
                </span>
              </div>
            </div>
          </div>

          {/* County & Administrative Geometry Metrics */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700">
              Administrative Unit Breakdown
            </h5>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-xl font-serif font-bold text-stone-900 font-mono-tabular block">
                  {stateA.counties.length}
                </span>
                <span className="text-[11px] text-stone-500 font-mono">Counties</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-xl font-serif font-bold text-stone-900 font-mono-tabular block">
                  {totalPayamsA}
                </span>
                <span className="text-[11px] text-stone-500 font-mono">Doc. Payams</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-xl font-serif font-bold text-stone-900 font-mono-tabular block">
                  {stateA.areaKm2.toLocaleString()}
                </span>
                <span className="text-[11px] text-stone-500 font-mono">km² Area</span>
              </div>
            </div>
          </div>

          {/* Counties Directory */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono uppercase font-bold text-stone-700">
                Constituent Counties ({stateA.counties.length})
              </span>
              <span className="text-stone-400 font-mono">Payams Tally</span>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1">
              {stateA.counties.map((c) => (
                <div
                  key={c.id}
                  onClick={() => onSelectCounty?.(stateA.id, c.id)}
                  className="p-2.5 bg-stone-50 hover:bg-stone-100 rounded border border-stone-200/80 flex items-center justify-between text-xs cursor-pointer transition-colors"
                >
                  <div>
                    <span className="font-bold text-stone-900">{c.name}</span>
                    <span className="text-stone-500 block text-[11px]">Seat: {c.headquarters}</span>
                  </div>
                  <span className="font-mono text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-200 text-[11px]">
                    {c.payams.length} Payams
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Economic Activities */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase font-bold text-stone-700 block mb-1.5">
              Key Economic Sectors
            </span>
            <div className="flex flex-wrap gap-1 text-[11px] text-stone-600">
              {stateA.economicActivity.map((sec, idx) => (
                <span key={idx}>
                  {sec}{idx < stateA.economicActivity.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card B */}
        <div className="border border-stone-200 rounded-lg p-6 bg-white space-y-6">
          <div className="pb-4 border-b border-stone-100">
            <div className="flex items-center justify-between text-xs font-mono text-stone-500">
              <span>{stateB.region}</span>
              <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {stateB.isSpecialAdministrativeArea ? 'Special Admin Area' : 'Federal State'}
              </span>
            </div>
            <h4 className="text-2xl font-serif font-bold text-stone-900 mt-1">{stateB.name}</h4>
            <div className="text-xs text-stone-600 mt-1">
              Seat of Administration: <span className="font-semibold text-stone-900">{stateB.capital}</span>
            </div>
          </div>

          {/* Key Leadership Metrics */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700">
              Key Representatives & Assembly
            </h5>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">{stateB.governorOrAdminTitle}</span>
                <span className="font-bold text-stone-900 block mt-0.5">{stateB.currentLeaderName}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">Assembly Speaker</span>
                <span className="font-bold text-stone-900 block mt-0.5">{stateB.speakerName || 'Council Speaker'}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">Assembly Seats</span>
                <span className="text-lg font-serif font-bold text-amber-800 font-mono-tabular block mt-0.5">
                  {stateB.assemblySeats} Seats
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-stone-400 block font-mono text-[11px]">Council of States Rep.</span>
                <span className="text-lg font-serif font-bold text-stone-900 font-mono-tabular block mt-0.5">
                  {stateB.isSpecialAdministrativeArea ? 'Special Deleg.' : 'State Senators'}
                </span>
              </div>
            </div>
          </div>

          {/* County & Administrative Geometry Metrics */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700">
              Administrative Unit Breakdown
            </h5>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-xl font-serif font-bold text-stone-900 font-mono-tabular block">
                  {stateB.counties.length}
                </span>
                <span className="text-[11px] text-stone-500 font-mono">Counties</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-xl font-serif font-bold text-stone-900 font-mono-tabular block">
                  {totalPayamsB}
                </span>
                <span className="text-[11px] text-stone-500 font-mono">Doc. Payams</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200/70">
                <span className="text-xl font-serif font-bold text-stone-900 font-mono-tabular block">
                  {stateB.areaKm2.toLocaleString()}
                </span>
                <span className="text-[11px] text-stone-500 font-mono">km² Area</span>
              </div>
            </div>
          </div>

          {/* Counties Directory */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono uppercase font-bold text-stone-700">
                Constituent Counties ({stateB.counties.length})
              </span>
              <span className="text-stone-400 font-mono">Payams Tally</span>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1">
              {stateB.counties.map((c) => (
                <div
                  key={c.id}
                  onClick={() => onSelectCounty?.(stateB.id, c.id)}
                  className="p-2.5 bg-stone-50 hover:bg-stone-100 rounded border border-stone-200/80 flex items-center justify-between text-xs cursor-pointer transition-colors"
                >
                  <div>
                    <span className="font-bold text-stone-900">{c.name}</span>
                    <span className="text-stone-500 block text-[11px]">Seat: {c.headquarters}</span>
                  </div>
                  <span className="font-mono text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-200 text-[11px]">
                    {c.payams.length} Payams
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Economic Activities */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase font-bold text-stone-700 block mb-1.5">
              Key Economic Sectors
            </span>
            <div className="flex flex-wrap gap-1 text-[11px] text-stone-600">
              {stateB.economicActivity.map((sec, idx) => (
                <span key={idx}>
                  {sec}{idx < stateB.economicActivity.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Direct Key Differences Matrix Table */}
      <div className="overflow-x-auto border border-stone-200 rounded-lg">
        <table className="w-full text-xs text-left">
          <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 font-mono uppercase">
            <tr>
              <th className="p-3">Attribute</th>
              <th className="p-3 font-serif font-bold text-stone-900">{stateA.name}</th>
              <th className="p-3 font-serif font-bold text-stone-900">{stateB.name}</th>
              <th className="p-3 text-stone-500">Comparative Variance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 bg-white">
            <tr>
              <td className="p-3 font-mono font-semibold text-stone-700">Governance Tier</td>
              <td className="p-3">{stateA.isSpecialAdministrativeArea ? 'Special Administrative Area' : 'Federal State'}</td>
              <td className="p-3">{stateB.isSpecialAdministrativeArea ? 'Special Administrative Area' : 'Federal State'}</td>
              <td className="p-3 text-stone-500">
                {stateA.isSpecialAdministrativeArea === stateB.isSpecialAdministrativeArea ? 'Identical Tier' : 'Different Governance Tier'}
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-semibold text-stone-700">Historical Region</td>
              <td className="p-3">{stateA.region}</td>
              <td className="p-3">{stateB.region}</td>
              <td className="p-3 text-stone-500">
                {stateA.region === stateB.region ? 'Same Region' : 'Cross-Regional'}
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-semibold text-stone-700">Counties Count</td>
              <td className="p-3 font-mono-tabular font-bold">{stateA.counties.length} Counties</td>
              <td className="p-3 font-mono-tabular font-bold">{stateB.counties.length} Counties</td>
              <td className="p-3 font-mono-tabular text-stone-700">
                {stateA.counties.length > stateB.counties.length 
                  ? `+${stateA.counties.length - stateB.counties.length} in ${stateA.name}`
                  : (stateB.counties.length > stateA.counties.length
                    ? `+${stateB.counties.length - stateA.counties.length} in ${stateB.name}`
                    : 'Equal Counties Count')}
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-semibold text-stone-700">Documented Payams</td>
              <td className="p-3 font-mono-tabular">{totalPayamsA} Payams</td>
              <td className="p-3 font-mono-tabular">{totalPayamsB} Payams</td>
              <td className="p-3 font-mono-tabular text-stone-700">
                {Math.abs(totalPayamsA - totalPayamsB)} Payam delta
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-semibold text-stone-700">Assembly / Council Seats</td>
              <td className="p-3 font-mono-tabular">{stateA.assemblySeats} Seats</td>
              <td className="p-3 font-mono-tabular">{stateB.assemblySeats} Seats</td>
              <td className="p-3 font-mono-tabular text-stone-700">
                {stateA.assemblySeats === stateB.assemblySeats ? 'Equal Representation' : `${Math.abs(stateA.assemblySeats - stateB.assemblySeats)} seats delta`}
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono font-semibold text-stone-700">Geographic Surface</td>
              <td className="p-3 font-mono-tabular">{stateA.areaKm2.toLocaleString()} km²</td>
              <td className="p-3 font-mono-tabular">{stateB.areaKm2.toLocaleString()} km²</td>
              <td className="p-3 font-mono-tabular text-stone-700">
                {stateA.areaKm2 > stateB.areaKm2 
                  ? `${(stateA.areaKm2 / (stateB.areaKm2 || 1)).toFixed(1)}x larger` 
                  : `${(stateB.areaKm2 / (stateA.areaKm2 || 1)).toFixed(1)}x larger`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
