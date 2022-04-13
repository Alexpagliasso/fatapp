import './Team.scss';

const Team = ({ team, selectTeam }) => {

    const squadre = team

    return (

        <div className='containerTeam' onClick={selectTeam}>
            <img className='logoSquadre' id={squadre.team_key} alt="logo" src={squadre.team_logo}></img>
            <p>{squadre.team_name}</p>
        </div>
    )
}


export default Team
