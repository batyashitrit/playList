import React from "react";
import my_playlist from "../playlist-all.png";

export default function Header(props) {
  return (
    <div>
      {/* <img className="my_playlist" src={my_playlist} /> */}
      <h1 className="username">{props.username}'s playlist</h1>
    </div>
  );
}
