import songCard from "./songCard.png";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useState } from "react";



export default function SongCard(props) {
  console.log(props)
  const plyrProps = {
    type: 'video',
    sources: [
      {
        src: props.id,
        provider: 'youtube',
      },
    ],
  };
  return (
    <div className="plyr">
      <Plyr source = {plyrProps}></Plyr>
      {/* <Plyr></Plyr> */}
      {/* <img className="cardImg" src={songCard} />
      <div className="songCard">
        <h3>Now playing</h3>
        <h4>{props.songname}</h4> */}
      {/* </div> */}
    </div>
  );
}
