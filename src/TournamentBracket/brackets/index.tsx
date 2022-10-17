import React, { Fragment } from "react";
import { Round, Bracket, SeedsList } from "../components/round";
import useMedia from "../hooks/useMedia";
import { renderSeed, renderTitle } from "../utils/renders";
import { ISingleEliminationProps } from "../types/SingleElimination";

const SingleElimination = ({
  rounds,
  rtl = false,
  roundClassName,
  bracketClassName,
  renderSeedComponent = renderSeed,
  roundTitleComponent = renderTitle,
}: ISingleEliminationProps) => {
  // Checking responsive size

  const data = rounds.map((round, roundIdx) => (
    <Round
      key={round.title}
      className={roundClassName}
    >
      {round.title && roundTitleComponent(round.title, roundIdx)}
      <SeedsList>
        {round.seeds.map((seed, idx) => {
          return (
            <Fragment key={seed.id}>
              {renderSeedComponent({
                seed,
                roundIndex: roundIdx,
                seedIndex: idx,
                rounds,
              })}
            </Fragment>
          );
        })}
      </SeedsList>
    </Round>
  ));

  return (
    <Bracket
      className={bracketClassName}
      dir={rtl ? "rtl" : "ltr"}
    >
      {data}
    </Bracket>
  );
};

export { SingleElimination };
