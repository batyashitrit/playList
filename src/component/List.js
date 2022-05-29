import SongRow from "./SongRow";
import SongCard from "./SongCard";
import { useState } from "react";

export default function List(props) {
  return (
    <>
      <h1>Song List</h1>
      {props.list.map((v) => (
        <SongRow>
          <h2
            onClick={(e) => {
              props.setClick(1);
              props.setN(e.target.outerText);
            }}
          >
            {v.song}
          </h2>
        </SongRow>
      ))}
    </>
  );
}
