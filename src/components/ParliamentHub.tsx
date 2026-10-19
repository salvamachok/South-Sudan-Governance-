import React, { useState } from 'react';
import { 
  NATIONAL_LEGISLATURE_SUMMARY, 
  PARLIAMENTARY_PARTIES, 
  PARLIAMENTARY_COMMITTEES,
  STATES_AND_AREAS_DATA 
} from '../data/southSudanData';
import { Landmark, Users, Award, Shield, FileText, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const ParliamentHub: React.FC = () => {
  const [selectedChamber, setSelectedChamber] = useState<'TNLA' | 'CouncilOfStates' | 'StateAssemblies'>('TNLA');
  const [activeCommitteeTab, setActiveCommitteeTab] = useState<string>('all');

  const filteredCommittees = activeCommitteeTab === 'all'
    ? PARLIAMENTARY_COMMITTEES
    : PARLIAMENTARY_COMMITTEES.filter(c => c.chamber.toLowerCase().includes(activeCommitteeTab.toLowerCase()));

  return (
    <div className="space-y-12">
      {/* Editorial Section Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
          <span>Part V of Constitution</span>
          <span aria-hidden="true">·</span>
          <span>Chapter 1 R-ARCSS 2018</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-stone-900 mt-1">
          The Bicameral Parliament & State Legislative Assemblies
        </h2>
        <p className="mt-2 text-stone-600 max-w-3xl leading-relaxed font-sans-body">
          South Sudan's National Legislature operates as a bicameral parliament established in Juba comprising 
          the Transitional National Legislative Assembly (TNLA) and the Council of States, federated with 
          ten State Legislative Assemblies across the states.
        </p>
      </div>

      {/* Chamber Switcher Segmented Control */}
      <div className="inline-flex p-1 bg-stone-200/80 rounded-lg">
        <button
          onClick={() => setSelectedChamber('TNLA')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
            selectedChamber === 'TNLA'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900'
          }`}
        >
          TNLA (National Assembly · 550 Seats)
        </button>
        <button
          onClick={() => setSelectedChamber('CouncilOfStates')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
            selectedChamber === 'CouncilOfStates'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900'
          }`}
        >
          Council of States (Upper House · 100 Seats)
        </button>
        <button
          onClick={() => setSelectedChamber('StateAssemblies')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
            selectedChamber === 'StateAssemblies'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900'
          }`}
        >
          State Legislative Assemblies (10 States · 1,000 Seats)
        </button>
      </div>

      {/* Chamber Details View */}
      {selectedChamber === 'TNLA' && (
        <div className="space-y-8">
          {/* Key Leadership Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-amber-700">Presiding Officer · Lower Chamber</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                  {NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.name}
                </h3>
                <p className="text-sm text-stone-600 mt-0.5">
                  {NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.title} ({NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.party})
                </p>
                <div className="mt-2 text-xs text-stone-500 italic">
                  {NATIONAL_LEGISLATURE_SUMMARY.speakers.tnla.historicNote}
                </div>
              </div>

              {/* Deputies */}
              <div className="flex flex-col sm:flex-row gap-4 text-xs">
                <div className="p-3 bg-stone-50 rounded border border-stone-200/80">
                  <div className="text-stone-500 font-mono uppercase">1st Deputy Speaker</div>
                  <div className="font-semibold text-stone-900 mt-0.5">Hon. Nathaniel Oyet Pierino</div>
                  <div className="text-blue-700 font-mono">SPLM-IO</div>
                </div>
                <div className="p-3 bg-stone-50 rounded border border-stone-200/80">
                  <div className="text-stone-500 font-mono uppercase">2nd Deputy Speaker</div>
                  <div className="font-semibold text-stone-900 mt-0.5">Hon. Parmena Awerial Aluong</div>
                  <div className="text-red-700 font-mono">SPLM-IG</div>
                </div>
              </div>
            </div>

            {/* Seat Distribution Breakdown */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  R-ARCSS Power-Sharing Seat Distribution (550 Seats Total)
                </h4>
                <span className="text-xs text-stone-500 font-mono">Constitutional Quota</span>
              </div>

              {/* Progress representation bar */}
              <div className="w-full h-4 rounded-full overflow-hidden flex bg-stone-100">
                {PARLIAMENTARY_PARTIES.map((party) => (
                  <div
                    key={party.abbreviation}
                    style={{ width: `${party.percentageTnla}%`, backgroundColor: party.color }}
                    title={`${party.abbreviation}: ${party.tnlaSeats} seats (${party.percentageTnla}%)`}
                    className="h-full transition-all hover:opacity-90 cursor-help"
                  />
                ))}
              </div>

              {/* Parties cards grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {PARLIAMENTARY_PARTIES.map((party) => (
                  <div
                    key={party.abbreviation}
                    className="p-4 bg-stone-50/70 border border-stone-200/90 rounded flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-stone-900">{party.abbreviation}</span>
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: party.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="text-2xl font-serif font-bold text-stone-900 font-mono-tabular mt-1">
                        {party.tnlaSeats} <span className="text-xs font-normal text-stone-500">seats</span>
                      </div>
                      <div className="text-xs font-mono text-stone-500 mt-0.5">
                        {party.percentageTnla}% quota
                      </div>
                      <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                        {party.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TNLA Powers & Mandate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="w-8 h-8 rounded bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Primary Statute Enactment</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Has exclusive mandate to debate, amend, and pass national statutory bills, penal codes, civil procedural acts, 
                and transitional legal reforms under the R-ARCSS timetable.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Fiscal & Budget Scrutiny</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Passes the annual National Appropriation Bill, examines supplementary budgets, regulates borrowing, 
                and oversees non-oil revenue collections through the National Revenue Authority.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="w-8 h-8 rounded bg-blue-50 text-blue-800 flex items-center justify-center mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Executive Accountability</h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Summons National Ministers, conducts parliamentary hearings, monitors SSPDF and security sector reform, 
                and exercises vote of no confidence mechanisms.
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedChamber === 'CouncilOfStates' && (
        <div className="space-y-8">
          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-stone-500">Upper Chamber · Guardian of the States</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                  {NATIONAL_LEGISLATURE_SUMMARY.speakers.councilOfStates.name}
                </h3>
                <p className="text-sm text-stone-600 mt-0.5">
                  {NATIONAL_LEGISLATURE_SUMMARY.speakers.councilOfStates.title} ({NATIONAL_LEGISLATURE_SUMMARY.speakers.councilOfStates.party})
                </p>
                <div className="mt-2 text-xs text-stone-500 italic">
                  {NATIONAL_LEGISLATURE_SUMMARY.speakers.councilOfStates.historicNote}
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded border border-stone-200/80 text-xs">
                <div className="text-stone-500 font-mono uppercase">Deputy Speaker</div>
                <div className="font-semibold text-stone-900 mt-0.5">Hon. Mary Ayen Majok</div>
                <div className="text-red-700 font-mono">SPLM-IG</div>
              </div>
            </div>

            {/* Council Seats Quota */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3">
                Council of States Seat Allocation (100 Seats Total)
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {PARLIAMENTARY_PARTIES.map((party) => (
                  <div key={party.abbreviation} className="p-3 bg-stone-50 border border-stone-200 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-800">{party.abbreviation}</span>
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: party.color }} />
                    </div>
                    <div className="text-xl font-serif font-bold text-stone-900 font-mono-tabular mt-1">
                      {party.councilOfStatesSeats} <span className="text-xs font-normal text-stone-500">seats</span>
                    </div>
                    <div className="text-[11px] font-mono text-stone-500 mt-0.5">
                      {((party.councilOfStatesSeats / 100) * 100).toFixed(0)}% allocation
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Constitutional Focus: Article 59 */}
            <div className="mt-6 p-4 bg-amber-50/60 border border-amber-200 rounded">
              <span className="text-xs font-mono font-semibold uppercase text-amber-900">Constitutional Mandate · Article 59</span>
              <p className="text-xs text-amber-950 mt-1 leading-relaxed">
                The Council of States initiates and reviews national legislation impacting the decentralized system of governance,
                safeguards state autonomy, deliberates on state boundaries disputes, resolves inter-communal cattle migration conflict, 
                and oversees local government capacity across all 10 states and 3 administrative areas.
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedChamber === 'StateAssemblies' && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              The 10 State Legislative Assemblies (SLA) & Administrative Area Councils
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              In accordance with Chapter 1 of R-ARCSS, each of the ten states maintains a reconstituted State Legislative Assembly 
              composed of <strong>100 Members of Parliament</strong> (totaling 1,000 State MPs nationwide). In addition, each Special 
              Administrative Area maintains an Administrative Area Council.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {STATES_AND_AREAS_DATA.map((state) => (
                <div key={state.id} className="p-4 bg-stone-50 border border-stone-200 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-500 uppercase">{state.region}</span>
                    <span className="text-xs font-mono font-bold text-stone-900">{state.assemblySeats} Seats</span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mt-1">{state.name}</h4>
                  <div className="mt-2 text-xs text-stone-600 space-y-1">
                    <div><strong>Capital:</strong> {state.capital}</div>
                    <div><strong>Leader:</strong> {state.currentLeaderName}</div>
                    <div><strong>Assembly Speaker:</strong> {state.speakerName || 'State Speaker'}</div>
                    <div><strong>Counties:</strong> {state.counties.length} Counties</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Specialized Standing Committees Section */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Specialized Standing Committees of Parliament
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Committees conduct clause-by-clause scrutiny, field investigations in the states, and audit reviews
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded text-xs font-medium">
            <button
              onClick={() => setActiveCommitteeTab('all')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeCommitteeTab === 'all' ? 'bg-white shadow-xs text-stone-900 font-bold' : 'text-stone-600'
              }`}
            >
              All Committees
            </button>
            <button
              onClick={() => setActiveCommitteeTab('TNLA')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeCommitteeTab === 'TNLA' ? 'bg-white shadow-xs text-stone-900 font-bold' : 'text-stone-600'
              }`}
            >
              TNLA Only
            </button>
            <button
              onClick={() => setActiveCommitteeTab('Council')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                activeCommitteeTab === 'Council' ? 'bg-white shadow-xs text-stone-900 font-bold' : 'text-stone-600'
              }`}
            >
              Council of States
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCommittees.map((comm) => (
            <div key={comm.id} className="p-4 bg-stone-50/80 border border-stone-200/80 rounded flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>{comm.chamber} Committee</span>
                  <span className="text-amber-700 font-semibold">{comm.id.toUpperCase()}</span>
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-sm mt-1">{comm.name}</h4>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {comm.mandate}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-stone-200 text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700">Oversight Portfolio:</span> {comm.oversightSector}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legislative Procedure Chart: How Bills Become Law */}
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8">
        <h3 className="text-lg font-serif font-bold text-stone-900 mb-1">
          Legislative Procedure: The 4 Readings in Parliament
        </h3>
        <p className="text-xs text-stone-500 mb-6">
          Standard passage mechanism under the Conduct of Business Regulations of the National Legislature
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
              1
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mt-2">First Reading</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Formal introduction and reading of the Bill's short and long titles by the sponsoring Minister or Private Member. 
              No debate takes place.
            </p>
          </div>

          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
              2
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mt-2">Second Reading</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Debate on the general merits and underlying policy principles of the Bill. Upon conclusion, it is referred 
              to the relevant Specialized Committee for public hearing and stakeholder input.
            </p>
          </div>

          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
              3
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mt-2">Third Reading</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              The Committee of the Whole House undertakes rigorous clause-by-clause scrutiny, voting on individual amendments, 
              schedules, and financial appropriations.
            </p>
          </div>

          <div className="bg-white p-4 rounded border border-stone-200">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
              4
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mt-2">Fourth Reading & Assent</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Final adoption of the clean Bill by majority vote. Transmitted within 30 days to the President of the Republic 
              for signature into enforceable law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
