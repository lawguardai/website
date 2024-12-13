import React from 'react';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export function PageSection({ 
  children, 
  className = '', 
  bgColor = 'bg-white'
}: PageSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${bgColor} ${className}`}>
      {children}
    </section>
  );
}