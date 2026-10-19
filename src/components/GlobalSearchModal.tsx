import React, { useState, useEffect, useMemo, useRef } from 'react';
import { STATES_AND_AREAS_DATA, PARLIAMENTARY_PARTIES, PARLIAMENTARY_COMMITTEES, NATIONAL_LEGISLATURE_SUMMARY } from '../data/southSudanData';
import { Search, X, MapPin, Landmark, Building, ChevronRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (category: 'parliament' | 'hierarchy' | 'map', stateId?: string, countyId?: string) => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'State' | 'Special Area' | 'County' | 'Payam' | 'Parliament' | 'Committee' | 'Party';
  category: 'parliament' | 'hierarchy' | 'map';
  stateId?: string;
  countyId?: string;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // caller opens
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Index all search items
  const allSearchItems = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    // Parliament Speakers & Leadership
    items.push({
      id: 'speaker-tnla',
      title: NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.name,
      subtitle: `${NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.title} · ${NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.party}`,
      type: 'Parliament',
      category: 'parliament'
    });
    items.push({
      id: 'speaker-cos',
      title: NATIONAL_LEGISLATURE_SUMMARY.speakers.councilOfStates.name,
      subtitle: `${NATIONAL_LEGISLATURE_SUMMARY.speakers.councilOfStates.title}`,
      type: 'Parliament',
      category: 'parliament'
    });

    // Parties
    PARLIAMENTARY_PARTIES.forEach(party => {
      items.push({
        id: `party-${party.abbreviation}`,
        title: `${party.name} (${party.abbreviation})`,
        subtitle: `TNLA: ${party.tnlaSeats} seats · Council of States: ${party.councilOfStatesSeats} seats`,
        type: 'Party',
        category: 'parliament'
      });
    });

    // Committees
    PARLIAMENTARY_COMMITTEES.forEach(comm => {
      items.push({
        id: `comm-${comm.id}`,
        title: comm.name,
        subtitle: `${comm.chamber} Standing Committee · Oversight: ${comm.oversightSector}`,
        type: 'Committee',
        category: 'parliament'
      });
    });

    // States and Areas
    STATES_AND_AREAS_DATA.forEach(state => {
      items.push({
        id: state.id,
        title: state.name,
        subtitle: `Capital: ${state.capital} · Region: ${state.region} · ${state.counties.length} Counties`,
        type: state.isSpecialAdministrativeArea ? 'Special Area' : 'State',
        category: 'hierarchy',
        stateId: state.id
      });

      // Counties under this state
      state.counties.forEach(county => {
        items.push({
          id: county.id,
          title: `${county.name} (${state.name})`,
          subtitle: `HQ: ${county.headquarters} · ${county.payams.length} Payams`,
          type: 'County',
          category: 'hierarchy',
          stateId: state.id,
          countyId: county.id
        });

        // Payams under this county
        county.payams.forEach(payam => {
          items.push({
            id: payam.id,
            title: `${payam.name}`,
            subtitle: `Payam in ${county.name}, ${state.name} · Bomas: ${payam.sampleBomas.join(', ')}`,
            type: 'Payam',
            category: 'hierarchy',
            stateId: state.id,
            countyId: county.id
          });
        });
      });
    });

    return items;
  }, []);

  // Filtered results
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      // Suggest high-level entities when query is empty
      return allSearchItems.slice(0, 8);
    }
    const cleanQuery = query.toLowerCase().trim();
    return allSearchItems
      .filter(item => 
        item.title.toLowerCase().includes(cleanQuery) || 
        item.subtitle.toLowerCase().includes(cleanQuery) ||
        item.type.toLowerCase().includes(cleanQuery)
      )
      .slice(0, 15);
  }, [allSearchItems, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4 pb-6">
      <div className="relative bg-white rounded-lg shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search input header */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200">
          <Search className="w-4 h-4 text-stone-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search South Sudan Parliament, States, Counties, Payams, Bomas..."
            className="w-full text-sm bg-transparent focus:outline-none text-stone-900 placeholder:text-stone-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 mr-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <span className="text-xs font-mono">ESC</span>
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[420px] overflow-y-auto p-2">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-stone-500 text-xs">
              No matching parliamentary or administrative records found for "{query}".
            </div>
          ) : (
            <div className="space-y-1">
              {filteredResults.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectResult(item.category, item.stateId, item.countyId);
                    onClose();
                  }}
                  className="w-full text-left p-3 hover:bg-stone-50 rounded flex items-center justify-between transition-colors border border-transparent hover:border-stone-200"
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-stone-900 text-sm truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
          <span>Search spans 10 States, 3 Special Areas, 79+ Counties & Payams</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
