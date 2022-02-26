import react from "react"
import Players from "../../Players/Players";
import './Team.scss';

const Team = ({ team }) => {

    const squadre = team

    //Ho provato al click della squadra a far apparire i nomi della relativa rosa ma non ci sono riuscito
    const selectTeam = () => {
        console.log(squadre.players)

        return squadre.players.map((key, player) => (
            <Players key={player.player_key} name={player.player_name} />
        ));
    }


    return (

        <div className='containerTeam' onClick={() => selectTeam()}>
            <img key={squadre.team_key} alt="logo" src={squadre.team_logo}></img>
            <p>{squadre.team_name}</p>
        </div>
    )
}


export default Team
