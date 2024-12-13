import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function LandingHeader() {
  return (
    <header className="bg-transparent py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">Lawguard AI</span>
        </Link>
        
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link to="/pricing" className="text-white/90 hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/compare" className="text-white/90 hover:text-white transition-colors">
                Compare
              </Link>
            </li>
            <li>
              <Link to="/use-cases" className="text-white/90 hover:text-white transition-colors">
                Use Cases
              </Link>
            </li>
            <li>
              <Link to="/api-docs" className="text-white/90 hover:text-white transition-colors">
                API
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}