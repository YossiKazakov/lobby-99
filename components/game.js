import GameScore from "./game-score";

export default function Game({ game }) {
  return (
    <div className="item card">
      <div className="content card-content">
        <div className="row">
            <h2 className="content">{game.home} - {game.visitor}</h2>
            <GameScore game={game} />
      </div>
     </div>
    </div>
  )
}