import SongRow from "./SongRow";
// import SongCard from "./SongCard";
import { useState } from "react";
import SongCard from "./SongCard";
import Plyr from "plyr-react"



export default function List(props) {
  return (
    <div className="list">
      {/* <h1>Song List</h1> */}
      {console.log(props)}
      {props.list.map((v) => (
        <SongRow id={v.id} key={v.song}>
          <h2
            key={v.song}
            onClick={(e) => {
              props.name == e.target.outerText && props.setClick(!props.click);
              props.setN(e.target.outerText);
              props.setId(v.id)
            }}
            >
            {console.log(props.id)}
            🎵{v.song}
          </h2>
        </SongRow>
      ))}
      {/* <Plyr></Plyr> */}
    </div>
  );
}
