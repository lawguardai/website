import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function TrialBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-3">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <p className="text-sm sm:text-base">
              Try Lawguard AI free for 7 days. No credit card required.
            </p>
          </div>
          <Button to="/pricing" variant="secondary" className="whitespace-nowrap">
            Start free trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </div>
  );
}