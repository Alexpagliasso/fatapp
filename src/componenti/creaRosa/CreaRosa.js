import "./CreaRosa.scss";
//import axios from 'axios';
import data from "../../Json/mockup.json";
import Team from "./Team/Team";
import Players from "../Players/Players";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

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
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {players.map((player) => {
            return (

              <SwiperSlide>
                <Players key={player.player_key} name={player.player_name} image={player.player_image} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CreaRosa;
