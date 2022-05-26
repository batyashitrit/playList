import List from "./component/List";
import SongCard from "./component/SongCard";
import SongRow from "./component/SongRow";
import { useState } from "react";

const songList = [
    {song: "song name 1"},
    {song: "song name 2"},
    {song: "song name 3"},
    {song: "song name 4"}]
export default function Layout(props) {
    const [isClick,setIsClick] = useState(0)
    console.log("bbab");
  return (
    <>
    <List isClick ={[isClick,setIsClick]}></List>
      <List list ={songList}></List>
      {isClick? <SongCard></SongCard> : <div></div>}
      {/* <SongCard></SongCard> */}
    </>
  );
}
