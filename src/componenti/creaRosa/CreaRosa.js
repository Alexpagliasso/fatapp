import "./CreaRosa.scss";
//import axios from 'axios';
import data from "../../Json/mockup.json";
import Team from "./Team/Team";
import Players from "../Players/Players";
import { useState } from "react";

function CreaRosa() {
  const Data = data.slice(0, 10);
  const [players, setPlayers] = useState([]);

  const selectTeam = (event) => {
    for (let i = 0; i < Data.length; i++) {
      if (event.target.id === Data[i].team_key) {
        let players = Data[i].players.map((item) => item);

          setPlayers(players);

      }
    }
  };

  return (
    <div className="CreaRosa">
      <div className="containerTeams">
        {Data.map((team) => {
          return (
            <Team key={team.team_key} team={team} selectTeam={selectTeam} />
          );
        })}
      </div>
      <div className="containerTeams">
        {players.map((player) => {
          return <Players name={player.player_name} image={player.player_image}  />;
        })}
      </div>
    </div>
  );
}

export default CreaRosa;
