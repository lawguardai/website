import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { Book, Code, Settings, Shield } from 'lucide-react';

export function Documentation() {
  const sections = [
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Getting Started',
      description: 'Learn the basics of Lawguard AI',
      links: ['Quick Start Guide', 'Platform Overview', 'First Steps']
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'API Reference',
      description: 'Complete API documentation',
      links: ['Authentication', 'Endpoints', 'Rate Limits']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Integration Guides',
      description: 'Connect with your existing tools',
      links: ['REST API', 'Webhooks', 'SDKs']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security',
      description: 'Security best practices',
      links: ['Data Protection', 'Access Control', 'Compliance']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Documentation
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-blue-600 mb-4">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-blue-600 hover:text-blue-700">
                          {link} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}