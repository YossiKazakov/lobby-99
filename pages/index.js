
import { useState } from "react";
import DataIntro from "../components/data-intro";
import Message from "../components/message";
// import RecordList from "../components/record-list";
import { useApiData } from "../hooks/data";
import { filterGameData, sortGameData } from "../utils";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
    
  const { dataFile, isLoading, isError } = useApiData();
  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!dataFile) return <Message content="No data could be loaded..." />

  let games = []
  dataFile.data.forEach((e) => {
    const game = {
    id: e.id,
    year: (e.date.substring(0,4)),
    month: (e.date.substring(5,7)),
    day: (e.date.substring(8,10)),
    home: e.home_team.full_name,
    homeScore: e.home_team_score,
    period: (e.period == 4 && e.status == "Final" ? 5 : e.period),
    season: e.season,
    status: e.status,
    time: e.time,
    visitor: e.visitor_team.full_name,
    visitorScore: e.visitor_team_score};
    games.push(game);
  });

  return (
    <>
      <div className="row">
        {games.map(game => {
          return <div key={game.id} className="item">
            <div className="content">{game.name}</div>
            </div>
        })}
      </div>
    </>
  )
}
