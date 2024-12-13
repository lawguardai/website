import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { Shield, Users, Globe, Award } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Customers', value: '1000+' },
    { label: 'Countries', value: '50+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Compliance Rate', value: '99.9%' }
  ];

  const team = [
    {
      name: 'Marcus Tisdale',
      role: 'CEO & Founder',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFCtYdwBBwsPg/profile-displayphoto-shrink_800_800/B56ZO1LMwwG4Ac-/0/1733911434110?e=1739404800&v=beta&t=KDX3V4EqJEVZwHoshnpdWI6yoir-yf7JI5_lYSnqP64'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow">
        <Container>
          <section className="py-20">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              About Lawguard AI
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We're on a mission to simplify regulatory compliance for businesses worldwide through 
              innovative AI-powered solutions.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
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