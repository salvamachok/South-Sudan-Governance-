import React, { useState } from 'react';
import { STATES_AND_AREAS_DATA } from '../data/southSudanData';
import { StateEntity, County } from '../types';
import { MapPin, Navigation, Building2, ChevronRight, Layers } from 'lucide-react';

interface InteractiveMapProps {
  onSelectEntity: (stateId: string, countyId?: string) => void;
}

// Approximate SVG grid positioning for 10 States + 3 Administrative Areas
const MAP_NODES: {
  id: string;
  label: string;
  region: 'Equatoria' | 'Bahr el Ghazal' | 'Upper Nile';
  x: number;
  y: number;
  w: number;
  h: number;
  isArea?: boolean;
}[] = [
  // Greater Bahr el Ghazal (North & West)
  { id: 'northern-bahr-el-ghazal', label: 'Northern Bahr el Ghazal (Aweil)', region: 'Bahr el Ghazal', x: 80, y: 130, w: 120, h: 70 },
  { id: 'abyei-area', label: 'Abyei Special Area', region: 'Bahr el Ghazal', x: 210, y: 90, w: 110, h: 60, isArea: true },
  { id: 'western-bahr-el-ghazal', label: 'Western Bahr el Ghazal (Wau / Raja)', region: 'Bahr el Ghazal', x: 30, y: 210, w: 140, h: 100 },
  { id: 'warrap', label: 'Warrap State (Kuajok)', region: 'Bahr el Ghazal', x: 180, y: 180, w: 110, h: 80 },
  { id: 'lakes', label: 'Lakes State (Rumbek)', region: 'Bahr el Ghazal', x: 240, y: 270, w: 120, h: 75 },

  // Greater Upper Nile (North & East)
  { id: 'ruweng-area', label: 'Ruweng Admin Area', region: 'Upper Nile', x: 330, y: 100, w: 110, h: 60, isArea: true },
  { id: 'unity', label: 'Unity State (Bentiu)', region: 'Upper Nile', x: 300, y: 170, w: 110, h: 80 },
  { id: 'upper-nile', label: 'Upper Nile State (Malakal / Renk)', region: 'Upper Nile', x: 420, y: 110, w: 140, h: 110 },
  { id: 'jonglei', label: 'Jonglei State (Bor / Akobo)', region: 'Upper Nile', x: 420, y: 230, w: 130, h: 110 },
  { id: 'pibor-area', label: 'Greater Pibor Area', region: 'Upper Nile', x: 560, y: 260, w: 110, h: 110, isArea: true },

  // Greater Equatoria (South)
  { id: 'western-equatoria', label: 'Western Equatoria (Yambio / Maridi)', region: 'Equatoria', x: 140, y: 360, w: 150, h: 85 },
  { id: 'central-equatoria', label: 'Central Equatoria (Juba / Yei)', region: 'Equatoria', x: 300, y: 365, w: 130, h: 85 },
  { id: 'eastern-equatoria', label: 'Eastern Equatoria (Torit / Kapoeta)', region: 'Equatoria', x: 440, y: 365, w: 160, h: 90 }
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectEntity }) => {
  const [selectedStateId, setSelectedStateId] = useState<string>('central-equatoria');
  const [regionFilter, setRegionFilter] = useState<'All' | 'Greater Equatoria' | 'Greater Bahr el Ghazal' | 'Greater Upper Nile'>('All');

  const selectedState = STATES_AND_AREAS_DATA.find(s => s.id === selectedStateId) || STATES_AND_AREAS_DATA[0];

  const filteredNodes = regionFilter === 'All'
    ? MAP_NODES
    : MAP_NODES.filter(node => {
        if (regionFilter === 'Greater Equatoria') return node.region === 'Equatoria';
        if (regionFilter === 'Greater Bahr el Ghazal') return node.region === 'Bahr el Ghazal';
        if (regionFilter === 'Greater Upper Nile') return node.region === 'Upper Nile';
        return true;
      });

  return (
    <div className="space-y-8">
      {/* Header and Region Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
            <span>Decentralised Administrative Geometry</span>
            <span aria-hidden="true">·</span>
            <span>10 States + 3 Special Areas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-stone-900 mt-1">
            Territorial Map & Jurisdiction Explorer
          </h2>
        </div>

        {/* Region Filter Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg text-xs font-medium">
          {(['All', 'Greater Equatoria', 'Greater Bahr el Ghazal', 'Greater Upper Nile'] as const).map(reg => (
            <button
              key={reg}
              onClick={() => setRegionFilter(reg)}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                regionFilter === reg
                  ? 'bg-stone-900 text-white font-semibold shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {reg === 'All' ? 'All Territories (10+3)' : reg.replace('Greater ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map View & Inspector Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs text-stone-500">
            <span>Click any territory to inspect administrative hierarchy</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-700" /> Equatoria</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-700" /> Bahr el Ghazal</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-sky-700" /> Upper Nile</span>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] bg-stone-50/60 rounded border border-stone-200/60 mt-3 p-2 overflow-hidden">
            <svg
              viewBox="0 0 700 480"
              className="w-full h-full select-none"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.04))' }}
            >
              {/* White Nile River stylized curve */}
              <path
                d="M 370 450 Q 350 370 330 310 T 360 220 T 410 160 T 430 80"
                fill="none"
                stroke="#93c5fd"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.5"
              />
              <text x="380" y="270" fill="#60a5fa" fontSize="10" fontStyle="italic" opacity="0.8">
                White Nile
              </text>

              {/* Render territory nodes */}
              {MAP_NODES.map((node) => {
                const isSelected = selectedStateId === node.id;
                const isDimmed = regionFilter !== 'All' && !filteredNodes.some(n => n.id === node.id);

                let fillColor = '#10b981'; // Equatoria
                let borderColor = '#059669';
                if (node.region === 'Bahr el Ghazal') {
                  fillColor = '#f59e0b';
                  borderColor = '#d97706';
                } else if (node.region === 'Upper Nile') {
                  fillColor = '#0284c7';
                  borderColor = '#0369a1';
                }

                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedStateId(node.id)}
                    className="cursor-pointer transition-transform duration-200"
                    opacity={isDimmed ? 0.25 : 1}
                  >
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.w}
                      height={node.h}
                      rx="6"
                      fill={isSelected ? '#1c1917' : (node.isArea ? '#fef3c7' : '#ffffff')}
                      stroke={isSelected ? '#f59e0b' : borderColor}
                      strokeWidth={isSelected ? 3 : (node.isArea ? 2 : 1.5)}
                      strokeDasharray={node.isArea ? '4 2' : undefined}
                      className="transition-colors"
                    />
                    {/* Region indicator strip */}
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.w}
                      height={5}
                      rx="2"
                      fill={fillColor}
                    />

                    {/* Text labels */}
                    <text
                      x={node.x + node.w / 2}
                      y={node.y + node.h / 2 - 4}
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : '#1c1917'}
                      fontSize={node.w > 120 ? '11' : '10'}
                      fontWeight="bold"
                      fontFamily="system-ui"
                    >
                      {node.label.split('(')[0].trim()}
                    </text>

                    <text
                      x={node.x + node.w / 2}
                      y={node.y + node.h / 2 + 12}
                      textAnchor="middle"
                      fill={isSelected ? '#fef08a' : '#78716c'}
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      {node.label.includes('(') ? node.label.match(/\((.*?)\)/)?.[1] : (node.isArea ? 'Special Admin' : '')}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>Dashed borders designate the Three Special Administrative Areas</span>
            <span className="font-mono text-stone-600">Selected: {selectedState.name}</span>
          </div>
        </div>

        {/* Selected State & Hierarchy Inspector Panel */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6 space-y-6">
          <div className="pb-4 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                {selectedState.region} {selectedState.isSpecialAdministrativeArea && '· Special Area'}
              </span>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {selectedState.assemblySeats} Assembly Seats
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              {selectedState.name}
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-stone-600">
              <div>
                <span className="text-stone-400 block font-mono">Headquarters:</span>
                <span className="font-semibold text-stone-900">{selectedState.capital}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-mono">{selectedState.governorOrAdminTitle}:</span>
                <span className="font-semibold text-stone-900">{selectedState.currentLeaderName}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-mono">Area:</span>
                <span className="font-mono-tabular">{selectedState.areaKm2.toLocaleString()} km²</span>
              </div>
              <div>
                <span className="text-stone-400 block font-mono">Counties Count:</span>
                <span className="font-mono-tabular font-bold text-stone-900">{selectedState.counties.length} Counties</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-stone-600 leading-relaxed font-sans-body">
              {selectedState.historicalContext}
            </p>
          </div>

          {/* Counties & Payams Listing */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                Counties within {selectedState.name} ({selectedState.counties.length})
              </h4>
              <button
                onClick={() => onSelectEntity(selectedState.id)}
                className="text-xs text-amber-800 hover:text-amber-900 font-semibold flex items-center gap-1"
              >
                <span>Full Hierarchy</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {selectedState.counties.map((county) => (
                <div
                  key={county.id}
                  onClick={() => onSelectEntity(selectedState.id, county.id)}
                  className="p-3 bg-stone-50 hover:bg-stone-100/80 border border-stone-200/80 rounded cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-sm">{county.name}</span>
                    <span className="text-xs font-mono text-stone-500">
                      {county.payams.length} Payams
                    </span>
                  </div>
                  <div className="text-xs text-stone-600 mt-1">
                    <span className="text-stone-400">Seat:</span> {county.headquarters}
                  </div>
                  {/* Payam tags */}
                  <div className="mt-2 flex flex-wrap gap-1 text-[11px] text-stone-500">
                    {county.payams.slice(0, 4).map((p, idx) => (
                      <span key={p.id}>
                        {p.name.replace(' Payam', '')}
                        {idx < Math.min(county.payams.length, 4) - 1 ? ' · ' : ''}
                      </span>
                    ))}
                    {county.payams.length > 4 && (
                      <span className="text-stone-400">+{county.payams.length - 4} more</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
