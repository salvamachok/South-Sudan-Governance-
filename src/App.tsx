/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ParliamentHub } from './components/ParliamentHub';
import { InteractiveMap } from './components/InteractiveMap';
import { AdminHierarchyExplorer } from './components/AdminHierarchyExplorer';
import { CivicFramework } from './components/CivicFramework';
import { CivicKnowledgeQuiz } from './components/CivicKnowledgeQuiz';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { Footer } from './components/Footer';
import { exportAdministrativeDataToCsv } from './utils/csvExport';

export default function App() {
  const [activeTab, setActiveTab] = useState<'parliament' | 'hierarchy' | 'map' | 'legal' | 'quiz'>('parliament');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedStateId, setSelectedStateId] = useState<string>('central-equatoria');
  const [selectedCountyId, setSelectedCountyId] = useState<string | undefined>(undefined);

  const handleExportCsv = () => {
    exportAdministrativeDataToCsv();
  };

  const handleSelectFromMap = (stateId: string, countyId?: string) => {
    setSelectedStateId(stateId);
    setSelectedCountyId(countyId);
    setActiveTab('hierarchy');
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const handleSelectFromResult = (
    category: 'parliament' | 'hierarchy' | 'map',
    stateId?: string,
    countyId?: string
  ) => {
    setActiveTab(category);
    if (stateId) setSelectedStateId(stateId);
    if (countyId) setSelectedCountyId(countyId);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-stone-900 font-sans-body">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onExportCsv={handleExportCsv}
      />

      {/* Hero Section with Chamber imagery and Operational Ribbon */}
      <HeroSection
        onExploreParliament={() => {
          setActiveTab('parliament');
          window.scrollTo({ top: 520, behavior: 'smooth' });
        }}
        onExploreTerritories={() => {
          setActiveTab('hierarchy');
          window.scrollTo({ top: 520, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {activeTab === 'parliament' && <ParliamentHub />}
        {activeTab === 'map' && <InteractiveMap onSelectEntity={handleSelectFromMap} />}
        {activeTab === 'hierarchy' && (
          <AdminHierarchyExplorer
            initialStateId={selectedStateId}
            initialCountyId={selectedCountyId}
          />
        )}
        {activeTab === 'legal' && <CivicFramework onExportCsv={handleExportCsv} />}
        {activeTab === 'quiz' && <CivicKnowledgeQuiz />}
      </main>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectFromResult}
      />

      {/* Institutional Footer */}
      <Footer onNavigate={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }} />
    </div>
  );
}
