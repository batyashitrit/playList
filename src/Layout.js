import List from "./component/List";
import SongCard from "./component/SongCard";
import SongRow from "./component/SongRow";
import { useEffect, useState } from "react";
import { songList } from "./options";
import { DeleteSong } from "./component/DeleteSong";
import { AddSong } from "./component/AdSong";
import background from "./pic2.jpg";
import Header from "./component/Header";
import Search from "./component/Search";

export default function Layout(props) {
  const [isClick, setIsClick] = useState(0);
  const [name, setName] = useState("");
  const [songList1, setSongList1] = useState(songList);
  const [id, setId] = useState(songList.id);
  const [externalList, setExternalList] = useState("");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3e6c1b205amsha8baa994aa99fcbp1e2507jsn6231381c4ded",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      "https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false",
      options
    )
      .then((response) => response.json())
      .then((response) => setExternalList(response))
      .catch((err) => console.error(err));
  }, []);

  // const filterd=externalList.filter(v=>v.title.includes(search))

  return (
    <>
    <div className="allPage">
      {/* <div>{externalList.filter(v=>v.title.includes(search))}</div> */}
      {/* <img src={background} className="background" /> */}
      <Header username={props.username}></Header>
      <Search externalList={externalList}></Search>
      <List
        setN={setName}
        name={name}
        list={songList1}
        song={songList.song}
        setClick={setIsClick}
        click={isClick}
        setId={setId}
        id={id}
      />
      <p>
        <AddSong list={songList1} setList={setSongList1}></AddSong>
      </p>
      <p>
        <DeleteSong list={songList1} setList={setSongList1}></DeleteSong>
      </p>
      </div>
      {isClick ? (
        <SongCard
          setClick={props.setIsClick}
          list={songList1}
          songname={name}
          id={id}
        ></SongCard>
      ) : (
        <div></div>
      )}
  </>
  );
}
