import React, { useState, useMemo } from 'react';
import { STATES_AND_AREAS_DATA } from '../data/southSudanData';
import { StateEntity, County, Payam } from '../types';
import { StateComparisonWidget } from './StateComparisonWidget';
import { 
  Building, 
  MapPin, 
  ChevronRight, 
  Search, 
  Layers, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  ChevronDown,
  Info,
  ArrowLeftRight
} from 'lucide-react';

interface AdminHierarchyExplorerProps {
  initialStateId?: string;
  initialCountyId?: string;
}

export const AdminHierarchyExplorer: React.FC<AdminHierarchyExplorerProps> = ({
  initialStateId,
  initialCountyId
}) => {
  const [viewMode, setViewMode] = useState<'hierarchy' | 'compare'>('hierarchy');
  const [selectedStateId, setSelectedStateId] = useState<string>(initialStateId || 'central-equatoria');
  const [selectedCountyId, setSelectedCountyId] = useState<string | null>(initialCountyId || null);
  const [selectedPayamId, setSelectedPayamId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [regionFilter, setRegionFilter] = useState<string>('All');

  // Find currently active state
  const currentState = useMemo(() => {
    return STATES_AND_AREAS_DATA.find(s => s.id === selectedStateId) || STATES_AND_AREAS_DATA[0];
  }, [selectedStateId]);

  // Find currently active county
  const currentCounty = useMemo(() => {
    if (!selectedCountyId) return currentState.counties[0] || null;
    return currentState.counties.find(c => c.id === selectedCountyId) || currentState.counties[0] || null;
  }, [currentState, selectedCountyId]);

  // Find currently active payam
  const currentPayam = useMemo(() => {
    if (!currentCounty) return null;
    if (!selectedPayamId) return currentCounty.payams[0] || null;
    return currentCounty.payams.find(p => p.id === selectedPayamId) || currentCounty.payams[0] || null;
  }, [currentCounty, selectedPayamId]);

  // Filtered states list
  const filteredStates = useMemo(() => {
    return STATES_AND_AREAS_DATA.filter(state => {
      const matchesRegion = regionFilter === 'All' || state.region === regionFilter;
      const matchesSearch = searchQuery === '' || 
        state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.counties.some(c => 
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.payams.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      return matchesRegion && matchesSearch;
    });
  }, [regionFilter, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Title & Description with View Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
            <span>Decentralized Governance Pyramid</span>
            <span aria-hidden="true">·</span>
            <span>Local Government Act 2009</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-stone-900 mt-1">
            Counties, Payams & Bomas Explorer
          </h2>
          <p className="mt-1.5 text-stone-600 max-w-2xl leading-relaxed font-sans-body text-xs sm:text-sm">
            Explore South Sudan's administrative tiers: from the 10 States & 3 Special Administrative Areas 
            down to the 79+ Counties, coordinating Payams, and grassroots Bomas.
          </p>
        </div>

        {/* View Mode Segmented Control */}
        <div className="inline-flex p-1 bg-stone-200/80 rounded-lg text-xs font-semibold shrink-0">
          <button
            onClick={() => setViewMode('hierarchy')}
            className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'hierarchy'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Administrative Hierarchy</span>
          </button>
          <button
            onClick={() => setViewMode('compare')}
            className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
              viewMode === 'compare'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Side-by-Side State Comparison</span>
          </button>
        </div>
      </div>

      {viewMode === 'compare' ? (
        /* Comparative Widget Mode */
        <StateComparisonWidget
          initialStateAId={selectedStateId}
          initialStateBId={selectedStateId === 'jonglei' ? 'central-equatoria' : 'jonglei'}
          onSelectCounty={(stId, cntyId) => {
            setSelectedStateId(stId);
            setSelectedCountyId(cntyId);
            setViewMode('hierarchy');
          }}
        />
      ) : (
        /* Hierarchical Explorer Mode */
        <div className="space-y-8">
          {/* Breadcrumb Navigation Trail */}
          <nav aria-label="Administrative Breadcrumb" className="p-3 bg-stone-100 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 font-medium border border-stone-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-stone-900">Republic of South Sudan</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />

              <button
                onClick={() => {
                  setSelectedCountyId(null);
                  setSelectedPayamId(null);
                }}
                className={`hover:text-stone-900 transition-colors ${!selectedCountyId ? 'text-amber-800 font-bold' : ''}`}
              >
                {currentState.name}
              </button>

              {currentCounty && (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                  <button
                    onClick={() => setSelectedPayamId(null)}
                    className={`hover:text-stone-900 transition-colors ${!selectedPayamId ? 'text-amber-800 font-bold' : ''}`}
                  >
                    {currentCounty.name}
                  </button>
                </>
              )}

              {currentPayam && (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                  <span className="text-stone-900 font-bold">{currentPayam.name}</span>
                </>
              )}
            </div>

            {/* Quick compare trigger for current state */}
            <button
              onClick={() => setViewMode('compare')}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded transition-colors font-medium whitespace-nowrap"
            >
              <ArrowLeftRight className="w-3 h-3 text-amber-700" />
              <span>Compare {currentState.name.split(' ')[0]} with another State</span>
            </button>
          </nav>

          {/* Explorer Controls: Region Tabs + Quick Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Region Segmented Bar */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg text-xs font-medium overflow-x-auto">
              {['All', 'Greater Equatoria', 'Greater Bahr el Ghazal', 'Greater Upper Nile'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setRegionFilter(reg)}
                  className={`px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                    regionFilter === reg
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Quick Filter Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter states, counties, payams..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900 placeholder:text-stone-400"
              />
            </div>
          </div>

          {/* Multi-Tier Explorer Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Column 1: States & Areas Selector (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-stone-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                  1. States & Special Areas ({filteredStates.length})
                </span>
                <span className="text-xs font-mono text-stone-400">Level 2</span>
              </div>

              <div className="space-y-1.5 max-h-[580px] overflow-y-auto pr-1">
                {filteredStates.map((state) => {
                  const isSelected = selectedStateId === state.id;
                  return (
                    <button
                      key={state.id}
                      onClick={() => {
                        setSelectedStateId(state.id);
                        setSelectedCountyId(null);
                        setSelectedPayamId(null);
                      }}
                      className={`w-full text-left p-3 rounded transition-colors border ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50/70 hover:bg-stone-100/90 text-stone-900 border-stone-200/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider opacity-75">
                          {state.region.replace('Greater ', '')}
                        </span>
                        {state.isSpecialAdministrativeArea && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isSelected ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-amber-100 text-amber-900'}`}>
                            Special Area
                          </span>
                        )}
                      </div>
                      <div className="font-serif font-bold text-sm mt-0.5">{state.name}</div>
                      <div className={`text-xs mt-1 flex items-center justify-between ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        <span>Capital: {state.capital}</span>
                        <span className="font-mono">{state.counties.length} Counties</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Counties Selector (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-stone-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                    2. Counties of {currentState.name} ({currentState.counties.length})
                  </span>
                </div>
                <span className="text-xs font-mono text-stone-400">Level 3</span>
              </div>

              <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                {currentState.counties.map((county) => {
                  const isSelected = (currentCounty?.id === county.id);
                  return (
                    <div
                      key={county.id}
                      onClick={() => {
                        setSelectedCountyId(county.id);
                        setSelectedPayamId(null);
                      }}
                      className={`p-3 rounded border cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-300'
                          : 'bg-stone-50/60 hover:bg-stone-100/70 border-stone-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-stone-900">{county.name}</h4>
                        <span className="text-xs font-mono text-stone-500 font-bold">
                          {county.payams.length} Payams
                        </span>
                      </div>
                      <div className="text-xs text-stone-600 mt-1">
                        <span className="text-stone-400">Headquarters:</span> {county.headquarters}
                      </div>
                      {county.description && (
                        <p className="text-[11px] text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {county.description}
                        </p>
                      )}
                      {county.keySectors && (
                        <div className="mt-2 flex flex-wrap gap-1 text-[10px] text-stone-500">
                          {county.keySectors.map((sector, idx) => (
                            <span key={idx}>
                              {sector}{idx < county.keySectors!.length - 1 ? ' · ' : ''}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Payams & Bomas Deep Drill-Down (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-stone-200 rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                    3. Payams & Bomas (Levels 4 & 5)
                  </span>
                </div>
                <span className="text-xs font-mono text-stone-400">Grassroots</span>
              </div>

              {currentCounty ? (
                <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
                  <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs">
                    <span className="font-mono text-stone-400 block uppercase">Selected County:</span>
                    <span className="font-bold text-stone-900 text-sm">{currentCounty.name}</span>
                    <span className="text-stone-500 block mt-0.5">Commissioner Headquarters: {currentCounty.headquarters}</span>
                  </div>

                  {/* Payams List */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                      Payams in {currentCounty.name}:
                    </div>

                    {currentCounty.payams.map((payam) => {
                      const isSelected = currentPayam?.id === payam.id;
                      return (
                        <div
                          key={payam.id}
                          onClick={() => setSelectedPayamId(payam.id)}
                          className={`p-3 rounded border cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border-stone-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs">{payam.name}</span>
                            <span className={`text-[11px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                              {payam.sampleBomas.length}+ Bomas
                            </span>
                          </div>

                          {/* Sample Bomas Pills */}
                          <div className="mt-2 pt-2 border-t border-stone-200/50">
                            <span className={`text-[10px] font-mono block mb-1 ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                              BOMAS (Grassroots Communities / Villages):
                            </span>
                            <div className="flex flex-wrap gap-1 text-[11px]">
                              {payam.sampleBomas.map((boma, bIdx) => (
                                <span
                                  key={bIdx}
                                  className={`px-1.5 py-0.5 rounded text-[10px] ${
                                    isSelected
                                      ? 'bg-stone-800 text-stone-200 border border-stone-700'
                                      : 'bg-white text-stone-700 border border-stone-200'
                                  }`}
                                >
                                  {boma}
                                </span>
                              ))}
                            </div>
                          </div>

                          {payam.notes && (
                            <p className={`text-[11px] mt-2 italic ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                              {payam.notes}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-stone-400 text-xs">
                  Select a county to inspect payams and bomas.
                </div>
              )}
            </div>
          </div>

          {/* Institutional Explanatory Panel: Understanding County, Payam & Boma Governance */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Local Governance Hierarchy: The Functions of County, Payam & Boma
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Defined under the Local Government Act 2009 and Transitional Constitution of the Republic of South Sudan
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* County Level */}
              <div className="p-5 bg-white border border-stone-200 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded bg-stone-900 text-amber-400 text-xs font-bold font-mono flex items-center justify-center">
                    C
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Tier 1: County Level</h4>
                </div>
                <div className="text-xs text-stone-500 font-mono mb-2">
                  Headed by: County Commissioner
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The primary socio-economic planning and executive development unit. County Commissioners are appointed 
                  by the President upon recommendation of the Governor. Supported by a County Legislative Council that 
                  enacts local bylaws, manages county tax collection, and maintains public peace.
                </p>
              </div>

              {/* Payam Level */}
              <div className="p-5 bg-white border border-stone-200 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded bg-stone-900 text-amber-400 text-xs font-bold font-mono flex items-center justify-center">
                    P
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Tier 2: Payam Level</h4>
                </div>
                <div className="text-xs text-stone-500 font-mono mb-2">
                  Headed by: Payam Administrator / Executive Director
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The coordinating administrative hub that links county ministries with grassroots villages. 
                  The Payam Administrator is a senior civil servant responsible for coordinating primary healthcare centers, 
                  primary school supervision, agricultural extension workers, and voter rolls.
                </p>
              </div>

              {/* Boma Level */}
              <div className="p-5 bg-white border border-stone-200 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded bg-stone-900 text-amber-400 text-xs font-bold font-mono flex items-center justify-center">
                    B
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Tier 3: Boma Level</h4>
                </div>
                <div className="text-xs text-stone-500 font-mono mb-2">
                  Headed by: Boma Chief / Traditional Authorities
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The foundational grassroots community and village unit. Traditional chieftaincies (Executive Chiefs, 
                  Sub-Chiefs, and Council of Elders) convene Customary Courts under customary law (C-Law) to resolve 
                  family, land tenure, cattle restitution, and community boundary disputes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
