export default function GameScore({ game }) {
    if(game.period == 0) {
        return(<div className="content">
        <h3>{game.status}</h3>
        <h3>{game.day}.{game.month}.{game.year}</h3></div>)
    }
    else{if(game.period == 5){
        return(<div className="content">
        <h2>{game.homeScore} - {game.visitorScore}</h2>
        <h3>{game.day}.{game.month}.{game.year}</h3></div>)
    }else{
        return (<div className="content">
        <h2>{game.homeScore} - {game.visitorScore}</h2>
        <h3>{game.status}|{game.time}</h3></div>
        )
    }
    }
  }