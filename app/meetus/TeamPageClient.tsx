'use client';

import dynamic from 'next/dynamic';

// Load TeamPage only on the client to avoid SSR/classname mismatches
const TeamPage = dynamic(
  () => import('../../src/components/src/components/TeamPage'),
  { ssr: false, loading: () => <div className="py-10 text-center">Loading team...</div> }
);

export default function TeamPageClient() {
  return <TeamPage />;
}

