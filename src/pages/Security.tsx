import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { Shield, Lock, Server, Key } from 'lucide-react';

export function Security() {
  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Data Protection',
      description: 'Enterprise-grade encryption for all data at rest and in transit'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Access Control',
      description: 'Role-based access control and multi-factor authentication'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with 24/7 monitoring'
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: 'Compliance',
      description: 'GDPR, HIPAA, and ISO 27001 compliant systems and processes'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Security at Lawguard AI</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Your security is our top priority. Learn about our comprehensive security measures.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Security Commitment</h2>
                <p className="text-gray-600">
                  We employ industry-leading security practices to protect your data and maintain the trust you place in us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Standards</h2>
                <p className="text-gray-600">
                  Our security program follows industry best practices and is regularly reviewed to ensure the highest standards of protection for your data.
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