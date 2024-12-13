import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Container } from '../layout/Container';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';

const navigationLinks = [
  { to: '/pricing', label: 'Pricing' },
  { to: '/compare', label: 'Compare' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/api-docs', label: 'API' },
  { to: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="bg-transparent py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-white" />
            <span className="text-xl sm:text-2xl font-bold text-white">Lawguard AI</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button to="/login" variant="secondary">
                  Login
                </Button>
              </li>
            </ul>
          </nav>

          <MobileMenu links={[...navigationLinks, { to: '/login', label: 'Login' }]} />
        </div>
      </Container>
    </header>
  );
}