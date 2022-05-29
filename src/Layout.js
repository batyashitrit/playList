import List from "./component/List";
import SongCard from "./component/SongCard";
import SongRow from "./component/SongRow";
import { useState } from "react";

const songList = [
  { song: "song name 1" },
  { song: "song name 2" },
  { song: "song name 3" },
  { song: "song name 4" },
];
export default function Layout(props) {
  const [isClick, setIsClick] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <List
        setN={setName}
        list={songList}
        song={songList.song}
        setClick={setIsClick}
      />
      {isClick ? (
        <SongCard
          setClick={props.setIsClick}
          list={songList}
          songname={name}
        ></SongCard>
      ) : (
        <div></div>
      )}
      {/* <SongCard></SongCard> */}
    </>
  );
}
