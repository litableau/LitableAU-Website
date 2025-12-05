'use client';

import dynamic from 'next/dynamic';

// Client-only wrapper to avoid SSR issues with styled-components
const TeamPage = dynamic(
  () => import('../../src/components/src/components/TeamPage'),
  { ssr: false, loading: () => <div className="py-10 text-center">Loading team...</div> }
);

export default function TeamPageClient() {
  return <TeamPage />;
}

