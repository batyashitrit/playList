import List from "./component/List";
import SongCard from "./component/SongCard";
import SongRow from "./component/SongRow";
import { useState } from "react";
import { songList } from "./options";
import { DeleteSong } from "./component/DeleteSong";
import { AddSong } from "./component/AdSong";
import background from "./images.jfif";
import Header from "./component/Header";

export default function Layout(props) {
  const [isClick, setIsClick] = useState(0);
  const [name, setName] = useState("");
  const [songList1, setSongList1] = useState(songList);

  return (
    <>
      <img src={background} className="background" />
      <Header username={props.username}></Header>
      <List
        setN={setName}
        name={name}
        list={songList1}
        song={songList.song}
        setClick={setIsClick}
        click={isClick}
      />

      <AddSong list={songList1} setList={setSongList1}></AddSong>
      <p>
        <DeleteSong list={songList1} setList={setSongList1}></DeleteSong>
      </p>
      {isClick ? (
        <SongCard
          setClick={props.setIsClick}
          list={songList1}
          songname={name}
        ></SongCard>
      ) : (
        <div></div>
      )}
    </>
  );
}
