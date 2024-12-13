import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';

export function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  Lawguard AI Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
                <p className="text-gray-600">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                  <li>Account information (name, email, company details)</li>
                  <li>Compliance-related information</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              {/* Add more sections as needed */}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}