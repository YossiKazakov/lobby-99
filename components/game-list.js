import Game from "./game.js";

export default function GameList({ games }) {
    if (games.length == 0){
        return(
        <div className="row">
        <h2 className="content none">There are no NBA matches currently taking place</h2>
        </div>)
    }
    else{
        return(
        <div className="row">
            {games.map(game => {
                return <Game key={game.id} game={game} />
            })}
        </div>)
    }
}