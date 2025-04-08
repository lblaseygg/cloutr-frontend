import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { GradientBackground } from '@/components/ui/GradientBackground';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <AppLayout>
      <GradientBackground>
        {children}
      </GradientBackground>
    </AppLayout>
  );
} 