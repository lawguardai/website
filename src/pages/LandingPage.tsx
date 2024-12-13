import React from 'react';
import { Header } from '../components/navigation/Header';
import { TrialBanner } from '../components/navigation/TrialBanner';
import { ComplianceMonitoring } from '../components/landing/features/ComplianceMonitoring';
import { DocumentManagement } from '../components/landing/features/DocumentManagement';
import { RegulatoryDatabase } from '../components/landing/features/RegulatoryDatabase';
import { TrialSection } from '../components/landing/TrialSection';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-blue-800">
      <TrialBanner />
      <Header />
      
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Simplify Your Compliance Journey
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Navigate complex regulations with confidence using our intelligent compliance assistant. Stay compliant, reduce risks, and focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/pricing" variant="secondary" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              to="/compare" 
              variant="outline" 
              className="text-lg px-8 py-4 text-white border-white hover:bg-white/10"
            >
              Compare Plans
            </Button>
          </div>
        </div>
      </section>

      <ComplianceMonitoring />
      <DocumentManagement />
      <RegulatoryDatabase />
      <TrialSection />
      <Footer />
    </div>
  );
}