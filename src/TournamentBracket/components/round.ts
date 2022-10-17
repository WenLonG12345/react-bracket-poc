import styled from 'styled-components';
import { ISeedProps } from '../types/Seed';

export const Bracket = styled.div<ISeedProps>(
  (props) => `
  display: flex;
  flex-direction: row;
  `
);

export const Round = styled.div<ISeedProps>(
  (props) => `
  flex: 0;
  // min-width:300px;
  display:flex;
  flex-direction:column;
  `
);

export const RoundTitle = styled.div`
  color: #8f8f8f;
  font-weight: 400;
  text-align: center;
`;

export const SeedsList = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  list-style: none;
`;
