import { IRoundProps } from './Rounds';

export type ISeedProps = {
  id: number | string;
  teams: Array<{ name?: string; [key: string]: any }>;
  date?: string;
  title?: string;
  [key: string]: any;
};

export interface IRenderSeedProps {
  seed: ISeedProps;
  roundIndex: number;
  seedIndex: number;
  rounds?: IRoundProps[];
}
