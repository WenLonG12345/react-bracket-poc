import React from 'react';
import { Seed, SeedItem, SeedTeam, SeedTime } from '../components/seed';
import { RoundTitle } from '../components/round';
import { IRenderSeedProps } from '../types/Seed';

/* ------------------------- default title component ------------------------ */
export const renderTitle = (title: string | JSX.Element) => <RoundTitle>{title}</RoundTitle>;

/* ------------------------- default seed component ------------------------- */
export const renderSeed = ({ seed }: IRenderSeedProps) => {
  return (
    <Seed>
      <SeedItem>
        <div>
          <SeedTeam>{seed.teams?.[0]?.name || '-----------'}</SeedTeam>
          <SeedTeam>{seed.teams?.[1]?.name || '-----------'}</SeedTeam>
        </div>
      </SeedItem>
      <SeedTime>{seed?.date}</SeedTime>
    </Seed>
  );
};
