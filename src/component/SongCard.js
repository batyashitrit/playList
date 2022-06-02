import songCard from "./songCard.png";

export default function SongCard(props) {
  return (
    <div>
      <img className="cardImg" src={songCard} />
      <div className="songCard">
        <h3>Now playing</h3>

        <h4>{props.songname}</h4>
      </div>
    </div>
  );
}
