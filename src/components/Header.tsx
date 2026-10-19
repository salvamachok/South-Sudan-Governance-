import React from 'react';
import { Landmark, Download, Search } from 'lucide-react';

interface HeaderProps {
  activeTab: 'parliament' | 'hierarchy' | 'map' | 'legal' | 'quiz';
  setActiveTab: (tab: 'parliament' | 'hierarchy' | 'map' | 'legal' | 'quiz') => void;
  onOpenSearch: () => void;
  onExportCsv: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onExportCsv
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-sm">
              SS
            </div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('parliament');
              }}
              className="text-base sm:text-lg font-serif-display font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
            >
              South Sudan Civic & Assembly Portal
            </a>
          </div>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
            <button
              onClick={() => setActiveTab('parliament')}
              className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
                activeTab === 'parliament'
                  ? 'border-stone-900 text-stone-900 font-semibold'
                  : 'border-transparent hover:text-stone-900'
              }`}
            >
              National & State Assemblies
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
                activeTab === 'map'
                  ? 'border-stone-900 text-stone-900 font-semibold'
                  : 'border-transparent hover:text-stone-900'
              }`}
            >
              Interactive Territory Map
            </button>
            <button
              onClick={() => setActiveTab('hierarchy')}
              className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
                activeTab === 'hierarchy'
                  ? 'border-stone-900 text-stone-900 font-semibold'
                  : 'border-transparent hover:text-stone-900'
              }`}
            >
              Counties, Payams & Bomas
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
                activeTab === 'legal'
                  ? 'border-stone-900 text-stone-900 font-semibold'
                  : 'border-transparent hover:text-stone-900'
              }`}
            >
              Legal Framework
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
                activeTab === 'quiz'
                  ? 'border-stone-900 text-stone-900 font-semibold'
                  : 'border-transparent hover:text-stone-900'
              }`}
            >
              Civic Knowledge
            </button>
          </nav>

          {/* Zone 3: 1 primary action area */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded transition-colors whitespace-nowrap"
              title="Search States, Counties, Payams, and Parliament"
            >
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">Search Portal</span>
              <kbd className="hidden md:inline text-[10px] bg-white px-1 py-0.5 rounded text-stone-400 border border-stone-200">⌘K</kbd>
            </button>
            <button
              onClick={onExportCsv}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab strip */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-4 border-t border-stone-200/60 no-scrollbar text-xs font-medium text-stone-600">
          <button
            onClick={() => setActiveTab('parliament')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'parliament' ? 'text-stone-900 font-bold border-b border-stone-900' : ''}`}
          >
            Parliament (NLA)
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'map' ? 'text-stone-900 font-bold border-b border-stone-900' : ''}`}
          >
            Territory Map
          </button>
          <button
            onClick={() => setActiveTab('hierarchy')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'hierarchy' ? 'text-stone-900 font-bold border-b border-stone-900' : ''}`}
          >
            Counties & Payams
          </button>
          <button
            onClick={() => setActiveTab('legal')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'legal' ? 'text-stone-900 font-bold border-b border-stone-900' : ''}`}
          >
            Law & LGA 2009
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'quiz' ? 'text-stone-900 font-bold border-b border-stone-900' : ''}`}
          >
            Quiz
          </button>
        </div>
      </div>
    </header>
  );
};
