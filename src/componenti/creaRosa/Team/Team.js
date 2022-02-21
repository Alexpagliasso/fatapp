import react from "react"
import './Team.scss';

const Team = (props) => {

    const squadre = props.team
    const selectTeam = () => {
        console.log(squadre.team_name)
    }
    return (

        <div className='containerTeam' onClick={() => selectTeam()}>
            <img src={squadre.team_logo}></img>
            <p>{squadre.team_name}</p>
        </div>
    )
}

export default Team
