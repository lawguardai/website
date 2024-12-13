import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { Search, Book, MessageSquare, FileText } from 'lucide-react';

export function Help() {
  const categories = [
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Getting Started',
      description: 'Learn the basics of using Lawguard AI'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'User Guides',
      description: 'Detailed guides for all features'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'FAQs',
      description: 'Common questions and answers'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow">
        <Container>
          <section className="py-20">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Help Center
            </h1>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search for help..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {categories.map((category) => (
                <div 
                  key={category.title}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-block p-3 bg-blue-50 rounded-full text-blue-600 mb-4">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}