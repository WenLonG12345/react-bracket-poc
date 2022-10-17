import { IRenderSeedProps } from '../types/Seed';
import { IRoundProps } from './Rounds';

export interface ISingleEliminationProps {
  // If true, the component direction will be set to RTL
  rtl?: boolean;
  // Array of rounds matching RoundProps shape,
  rounds: IRoundProps[];
  // Single round className
  roundClassName?: string;
  // The whole bracket className
  bracketClassName?: string;
  /**
   * @param {string} title string or component passed with each round
   * @param {number} round the current round index
   */
  roundTitleComponent?: (title: string | JSX.Element, roundIdx: number) => JSX.Element;
  /**
   * @param {object} seed the current seed
   * @param {number} roundIdx the current round index
   */
  renderSeedComponent?: (props: IRenderSeedProps) => JSX.Element;
}
