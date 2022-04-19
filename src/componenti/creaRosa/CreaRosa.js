
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CreaRosa.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import data from "../../Json/mockup.json";
import Team from "./Team/Team";
import Players from "../Players/Players";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
//import axios from 'axios';

function CreaRosa() {
  const Data = data.slice(0, 10);
  // const [players, setPlayers] = useState([]);
  const [portieri, setPortieri] = useState([]);


  // Seleziona squadra
  const selectTeam = event => {
    let port = [];
    for (let i = 0; i < Data.length; i++) {
      if (event.target.id === Data[i].team_key) {
        let players = Data[i].players.map((item) => item);
        // setPlayers(players);

        players.forEach((p) => {
          if (p.player_type === "Goalkeepers") {

            port.push(p);

            port.forEach((p) => {

              //images not found
              checkIfImageExists(p.player_image, (exists) => {
                if (!exists) {


                  console.log(`Portieri non trovati ${p.player_name}`);

                  p.player_image = `./img/Giocatori/${p.player_name}.jpg`;

                  console.log(`Portieri ${p.player_image}`);

                }
              });

            });

          }

          setTimeout(() => {
            setPortieri(port);
          }, 200);

        });


      }
    }
  };


  // Controllo se mi ritorna l'immagine dall'api
  const checkIfImageExists = (url, callback) => {
    const img = new Image();

    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  };


  // Squadre
  const team = Data.map((team) => {
    return (
      <Team key={team.team_key} team={team} selectTeam={selectTeam} />
    );
  });

  // Portieri
  const goalkeepers = portieri.map((player) => {
    return (
      <SwiperSlide key={player.player_key}>
        <Players key={player.player_key} name={player.player_name} image={player.player_image} />
      </SwiperSlide>
    )
  });


  return (
    <div className="CreaRosa">
      <div className="containerTeams">
        {team}
      </div>
      <div className="containerTeams">
        <Swiper
          onSlideChange={() => console.log(portieri)}
          onSwiper={(swiper) => console.log(swiper)}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {goalkeepers}
        </Swiper>
      </div>
    </div>
  );
}

export default CreaRosa;
