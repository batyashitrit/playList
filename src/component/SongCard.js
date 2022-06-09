import songCard from "./songCard.png";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useState } from "react";
 

// const player = new Plyr('#player', {
//   /* options */
// });


export default function SongCard(props) {
  console.log(props.id)
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
    <div>
      {console.log(props)}
      <Plyr className="plyr" source = {plyrProps}></Plyr>
      {/* <img className="cardImg" src={songCard} />
      <div className="songCard">
        <h3>Now playing</h3>

        <h4>{props.songname}</h4> */}
      {/* </div> */}
    </div>
  );
}
