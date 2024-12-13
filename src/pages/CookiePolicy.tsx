import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';

export function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and allow certain features to work.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-600">We use cookies for:</p>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Personalization of your experience</li>
                  <li>Security and fraud prevention</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-600">
                  You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience on our website.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}