import './CreaRosa.scss';
//import axios from 'axios';
import data from '../../Json/mockup.json'
import Team from './Team/Team';
import Players from '../Players/Players';
import { useState } from 'react';

function CreaRosa() {

  const [name, setName] = useState('');
  const Data = data.slice(0, 10)




  const selectTeam = (event) => {
    console.log(Data.players)

    for (let i = 0; i < Data.length; i++) {
      if (event.target.src === Data[i].team_logo) {

        setName(Data[i].team_name);

      }
    }
  }



  /*
  const fetch = async () => {
    axios.get("https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res)
      })
  }
  const fetch2 = async () => {
    axios.get("https://apiv2.allsportsapi.com/football/?&met=Players&playerId=1836921955&APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res)
      })
  }

  const fetchPor = async () => {
    axios.get("https://apiv2.allsportsapi.com/football/?&met=Players&playerId=3214816050&APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res)
      })
  }



  const fetch3 = async () => {
    axios.get("https://apiv2.allsportsapi.com/football/?&met=Teams&leagueId=207&APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res)
      })
  }

  const fetch4 = async () => {
    axios.get("https://apiv2.allsportsapi.com/football/?&met=H2H&firstTeamId=96&secondTeamId=93&APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res)
      })
  }

  const fetch5 = async () => {
    axios.get("https://apiv2.allsportsapi.com/football/?&met=Probabilities&matchId=913525&APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res.data.result)
      })
  }

  const fetch6 = async () => {
    axios.get("https://wss.allsportsapi.com/live_events/?APIkey=ca28127c1d6927fd9db77f390e5cdb54aef7bad562f8ae0b593ee2552c669359")
      .then(res => {
        console.log(res.data)
      })
  }

  const zambia = () => {
    console.log(Data)
  }

  const token = "211eb0274c6240f1ac7f1919975ec542"
  const url = "https://api-football-v1.p.rapidapi.com/v3/players"


  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/status',
    //params: { id: '276', season: '2020' },
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '211eb0274c6240f1ac7f1919975ec542'
    }
  };

  const fetchSecondApi = async () => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  */

  return (
    <div className="CreaRosa">
      <div className='containerTeams'>
        {Data.map((team) => {
          return (
            <Team
              key={team.team_key}
              team={team}
              selectTeam={selectTeam}
            />
          )
        })}
      </div>
      <div className='containerPlayers'>
        <Players name={name} />
      </div>
    </div>

  );
}

export default CreaRosa;
