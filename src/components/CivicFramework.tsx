import React from 'react';
import { LEGAL_FRAMEWORK_ARTICLES, STATES_AND_AREAS_DATA } from '../data/southSudanData';
import { Download, BookOpen, Scale, FileText, CheckCircle2 } from 'lucide-react';

interface CivicFrameworkProps {
  onExportCsv: () => void;
}

export const CivicFramework: React.FC<CivicFrameworkProps> = ({ onExportCsv }) => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
          <span>Statutory Authority & Customary Jurisprudence</span>
          <span aria-hidden="true">·</span>
          <span>Legal Compendium</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-stone-900 mt-1">
          Constitutional & Legal Framework
        </h2>
        <p className="mt-2 text-stone-600 max-w-3xl leading-relaxed font-sans-body">
          The legal foundation of South Sudan's parliament and decentralized administrative system rests on 
          the Transitional Constitution of the Republic of South Sudan (2011), the 2018 Revitalized Peace Agreement (R-ARCSS), 
          and the Local Government Act (2009).
        </p>
      </div>

      {/* CSV Export Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-amber-400">Official Administrative Dataset</span>
          <h3 className="text-xl font-serif font-bold text-white mt-1">
            Complete South Sudan States, Counties & Payams Directory
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1.5 max-w-xl leading-relaxed">
            Download the structured CSV dataset containing all 10 States, 3 Special Administrative Areas, 
            79+ Counties, headquarters, assembly seats, and documented Payams for official reporting and research.
          </p>
        </div>
        <button
          onClick={onExportCsv}
          className="flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Download Complete CSV</span>
        </button>
      </div>

      {/* Key Legal Articles Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-stone-900">
          Enacted Constitutional & Statutory Provisions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LEGAL_FRAMEWORK_ARTICLES.map((article, index) => (
            <div key={index} className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                  <span className="font-bold text-amber-800">{article.number}</span>
                  <span>{article.source}</span>
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-2">
                  {article.title}
                </h4>
                <blockquote className="text-xs text-stone-700 bg-stone-50 p-3 rounded border border-stone-200/80 italic leading-relaxed">
                  "{article.excerpt}"
                </blockquote>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-900">Constitutional Significance:</strong> {article.significance}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Traditional Authority vs Statutory Government Deep-Dive */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
        <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
          Customary Law (C-Law) & Traditional Authorities at the Boma Tier
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-3xl leading-relaxed">
          The 2009 Local Government Act harmoniously blends formal statutory administrative law with traditional customary governance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-700">
          <div className="p-4 bg-stone-50 rounded border border-stone-200">
            <h4 className="font-bold text-stone-900 text-sm mb-2">Chieftaincy Hierarchy</h4>
            <ul className="space-y-1.5 list-disc list-inside text-stone-600">
              <li><strong>Paramount Chief (Sultan):</strong> Highest traditional authority presiding over county-wide customary courts.</li>
              <li><strong>Head Chief:</strong> Presides at the Payam level customary court (Regional Court).</li>
              <li><strong>Executive Chief:</strong> Boma level traditional leader overseeing village disputes and head counts.</li>
            </ul>
          </div>

          <div className="p-4 bg-stone-50 rounded border border-stone-200">
            <h4 className="font-bold text-stone-900 text-sm mb-2">Customary Jurisdiction</h4>
            <ul className="space-y-1.5 list-disc list-inside text-stone-600">
              <li>Adjudicates family affairs (marriage, bride wealth cattle / dowry disputes).</li>
              <li>Land customary tenure and community pasture rights allocation.</li>
              <li>Restitution (blood-wealth compensation / dia) to prevent inter-communal feuds.</li>
            </ul>
          </div>

          <div className="p-4 bg-stone-50 rounded border border-stone-200">
            <h4 className="font-bold text-stone-900 text-sm mb-2">Statutory Interface</h4>
            <ul className="space-y-1.5 list-disc list-inside text-stone-600">
              <li>Statutory County Courts have appellate jurisdiction over customary court judgments.</li>
              <li>Customary rules repugnant to natural justice, human rights, or the Constitution are void.</li>
              <li>The Local Government Board monitors chief appointment elections and customary standards.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
