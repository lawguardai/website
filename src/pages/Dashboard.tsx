import React from 'react';
import { Header } from '../components/Header';
import { ComplianceCheckTool } from '../components/ComplianceCheck';
import { RegulatoryDatabase } from '../components/RegulatoryDatabase';
import { CompliancePlaybook } from '../components/CompliancePlaybook';
import { DocumentGenerator } from '../components/DocumentGenerator';
import { ConsultationServices } from '../components/ConsultationServices';
import { ComplianceDashboard } from '../components/ComplianceDashboard';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-500">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ComplianceDashboard />
            <RegulatoryDatabase />
            <DocumentGenerator />
          </div>
          <div className="space-y-8">
            <ComplianceCheckTool />
            <CompliancePlaybook />
            <ConsultationServices />
          </div>
        </div>
      </main>
    </div>
  );
}