import React from 'react';
import { Landmark, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'parliament' | 'hierarchy' | 'map' | 'legal' | 'quiz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          {/* Col 1: Wordmark & Motto */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-amber-400 text-stone-950 flex items-center justify-center font-serif font-bold text-xs">
                SS
              </div>
              <span className="font-serif-display font-bold text-white text-base tracking-tight">
                Republic of South Sudan · Civic & Parliamentary Repository
              </span>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              "Justice, Liberty, Prosperity"
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              Comprehensive institutional portal detailing the Transitional National Legislative Assembly (TNLA), 
              the Council of States, the 10 States, 3 Special Administrative Areas, 79+ Counties, Payams, and grassroots Bomas.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Institutions & Divisions
            </div>
            <ul className="text-xs space-y-1.5 text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('parliament')}
                  className="hover:text-amber-400 transition-colors"
                >
                  National Legislature (TNLA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('parliament')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Council of States (Upper House)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hierarchy')}
                  className="hover:text-amber-400 transition-colors"
                >
                  10 States & 3 Special Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hierarchy')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Counties, Payams & Bomas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Governance Sources */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Constitutional Basis
            </div>
            <ul className="text-xs space-y-1.5 text-stone-400">
              <li>Transitional Constitution (2011)</li>
              <li>R-ARCSS Chapter 1 (2018)</li>
              <li>Local Government Act (2009)</li>
              <li>Customary Law Courts Framework</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div>
            Official Civic Reference Guide for South Sudan Administration and Parliament.
          </div>
          <div className="font-mono text-stone-500">
            Juba, Central Equatoria State · Republic of South Sudan
          </div>
        </div>
      </div>
    </footer>
  );
};
