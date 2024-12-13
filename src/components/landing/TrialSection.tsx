import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function TrialSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Compliance Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Lawguard AI for their regulatory compliance needs.
            Start your free trial today.
          </p>
          <Button 
            to="/pricing" 
            variant="secondary"
            className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-blue-100 mt-4">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  );
}