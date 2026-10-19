import React from 'react';
import { Landmark, MapPin, Building, Users } from 'lucide-react';
import parliamentHeroImg from '../assets/images/ssudan_parliament_chamber_1792376892494.jpg';

interface HeroSectionProps {
  onExploreParliament: () => void;
  onExploreTerritories: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreParliament,
  onExploreTerritories
}) => {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden border-b border-stone-800">
      {/* Background with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={parliamentHeroImg}
          alt="Transitional National Legislative Assembly chamber of South Sudan"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Resilient fallback container if needed
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400 mb-3">
            <span>Republic of South Sudan</span>
            <span aria-hidden="true">·</span>
            <span>Civic & Administrative Digest</span>
            <span aria-hidden="true">·</span>
            <span>R-ARCSS Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-white leading-[1.15] text-balance">
            The National Legislature, Ten States, and Three Special Administrative Areas
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-sans-body">
            Authoritative civic repository of the Transitional National Legislative Assembly (TNLA), 
            Council of States, State Legislative Assemblies (SLA), and the decentralised administrative 
            pyramid across Counties, Payams, and Bomas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreParliament}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap"
            >
              Explore National & State Assemblies
            </button>
            <button
              onClick={onExploreTerritories}
              className="px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded transition-colors whitespace-nowrap"
            >
              Browse Counties, Payams & Bomas
            </button>
          </div>
        </div>

        {/* Operational Utility Strip */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-stone-300">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-stone-400">National Assembly</span>
            <span className="text-2xl font-serif font-bold text-amber-400 font-mono-tabular mt-0.5">550 Seats</span>
            <span className="text-xs text-stone-400 mt-0.5">TNLA (5 Peace Signatory Blocs)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-stone-400">Council of States</span>
            <span className="text-2xl font-serif font-bold text-white font-mono-tabular mt-0.5">100 Seats</span>
            <span className="text-xs text-stone-400 mt-0.5">Upper House · State Guardians</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-stone-400">Federated Units</span>
            <span className="text-2xl font-serif font-bold text-amber-400 font-mono-tabular mt-0.5">10 + 3</span>
            <span className="text-xs text-stone-400 mt-0.5">10 States · 3 Admin Areas</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-stone-400">Local Government</span>
            <span className="text-2xl font-serif font-bold text-white font-mono-tabular mt-0.5">79+ Counties</span>
            <span className="text-xs text-stone-400 mt-0.5">Tiered to Payams & Boma Chiefs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
