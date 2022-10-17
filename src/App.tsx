import React from "react";
import logo from "./logo.svg";
import {
  Bracket,
  IRoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  IRenderSeedProps,
} from "./TournamentBracket";
import "./App.css";

const GERMANY_LOGO =
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png";
const JAPAN_LOGO =
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png";
const MALAYSIA_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2560px-Flag_of_Malaysia.svg.png";

function App() {
  const rounds: IRoundProps[] = [
    {
      title: "Round of 16",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [
            { name: "Team A", avatar: GERMANY_LOGO, score: 1 },
            { name: "Team B", avatar: JAPAN_LOGO, score: 2 },
          ],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [
            { name: "Team C", avatar: GERMANY_LOGO, score: 1 },
            { name: "Team D", avatar: JAPAN_LOGO, score: 3 },
          ],
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [
            { name: "Team E", avatar: GERMANY_LOGO, score: 1 },
            { name: "Team F", avatar: JAPAN_LOGO, score: 4 },
          ],
        },
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [
            { name: "Team G", avatar: GERMANY_LOGO, score: 4 },
            { name: "Team H", avatar: JAPAN_LOGO, score: 1 },
          ],
        },
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [
            { name: "Team I", avatar: GERMANY_LOGO, score: 1 },
            { name: "Team J", avatar: JAPAN_LOGO, score: 5 },
          ],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [
            { name: "Team K", avatar: GERMANY_LOGO, score: 3 },
            { name: "Team L", avatar: JAPAN_LOGO, score: 4 },
          ],
        },
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [
            { name: "Team M", avatar: GERMANY_LOGO, score: 5 },
            { name: "Team N", avatar: JAPAN_LOGO, score: 1 },
          ],
        },
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [
            { name: "Team C", avatar: GERMANY_LOGO, score: 1 },
            { name: "Team D", avatar: JAPAN_LOGO, score: 1 },
          ],
        },
      ],
    },
    {
      title: "Quater Final",
      seeds: [
        {
          id: 9,
          date: new Date().toDateString(),
          teams: [
            { name: "Team A", avatar: GERMANY_LOGO, score: 1 },
            { name: "Team C", avatar: MALAYSIA_LOGO, score: 1 },
          ],
        },
        {
          id: 10,
          date: new Date().toDateString(),
          teams: [
            { name: "Team B", avatar: MALAYSIA_LOGO, score: 1 },
            { name: "Team E", avatar: GERMANY_LOGO, score: 1 },
          ],
        },
        {
          id: 11,
          date: new Date().toDateString(),
          teams: [
            { name: "Team D", avatar: GERMANY_LOGO, score: 2 },
            { name: "Team F", avatar: MALAYSIA_LOGO, score: 7 },
          ],
        },
        {
          id: 12,
          date: new Date().toDateString(),
          teams: [
            { name: "Team G", avatar: MALAYSIA_LOGO, score: 1 },
            { name: "Team H", avatar: GERMANY_LOGO, score: 8 },
          ],
        },
      ],
    },
    {
      title: "Semi Final",
      seeds: [
        {
          id: 13,
          date: new Date().toDateString(),
          teams: [
            { name: "Team A", avatar: JAPAN_LOGO, score: 10 },
            { name: "Team C", avatar: MALAYSIA_LOGO, score: 1 },
          ],
        },
        {
          id: 14,
          date: new Date().toDateString(),
          teams: [
            { name: "Team A", avatar: MALAYSIA_LOGO, score: 1 },
            { name: "Team C", avatar: JAPAN_LOGO, score: 9 },
          ],
        },
      ],
    },
    {
      title: "Final",
      seeds: [
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [
            { name: "Team A", avatar: GERMANY_LOGO, score: 5 },
            { name: "Team C", avatar: JAPAN_LOGO, score: 1 },
          ],
        },
      ],
    },
  ];

  const CustomSeed = ({
    seed,
    roundIndex,
    seedIndex,
  }: IRenderSeedProps) => {
    // breakpoint passed to Bracket component
    // to check if mobile view is triggered or not

    // mobileBreakpoint is required to be passed down to a seed
    return (
      <Seed style={{ fontSize: 12 }}>
        <SeedItem style={{ backgroundColor: "white", color: "black" }}>
          <SeedTeam style={{ justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                border: "1px solid #000",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={seed.teams[0]?.avatar} width="50" />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flex: 1,
                padding: "0px 10px",
              }}
            >
              <div>{seed.teams[0]?.name || "NO TEAM "}</div>
              <div>{seed.teams[0]?.score}</div>
            </div>
          </SeedTeam>
          <SeedTeam>
            <div
              style={{
                display: "flex",
                border: "1px solid #000",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={seed.teams[1]?.avatar} width="50" />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flex: 1,
                padding: "0px 10px",
              }}
            >
              <div>{seed.teams[1]?.name || "NO TEAM "}</div>
              <div>{seed.teams[1]?.score}</div>
            </div>
          </SeedTeam>
        </SeedItem>
      </Seed>
    );
  };

  return (
    <Bracket
      rounds={rounds}
      renderSeedComponent={CustomSeed}
      roundTitleComponent={(title: React.ReactNode, roundIndex: number) => {
        return (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: "30px 0px",
            }}
          >
            {title}
          </div>
        );
      }}
    />
  );
}

export default App;
