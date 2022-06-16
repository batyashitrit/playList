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
import AddSong2 from "./component/AddSong2";

export default function Layout(props) {
  const [isClick, setIsClick] = useState(0);
  const [name, setName] = useState("");
  const [songList1, setSongList1] = useState(songList);
  const [id, setId] = useState(songList.id);
  
  
  // useEffect(() => {
  //   fetch(
  //     "https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setExternalList(response))
  //     .catch((err) => console.error(err));
  // }, []);

  // const filterd=externalList.filter(v=>v.title.includes(search))
  return (
    <>
      <Header username={props.username}></Header>
    <div className="allPage">
      <div className="head">
      {/* <div>{externalList.filter(v=>v.title.includes(search))}</div> */}
      {/* <img src={background} className="background" /> */}
      <DeleteSong list={songList1} setList={setSongList1}></DeleteSong>
      <Search list={songList1} setList={setSongList1} setClick={setIsClick}
        click={isClick}   setId={setId}
        id={id}> </Search></div>
      
      
      <List
        setN={setName}
        name={name}
        list={songList1}
        song={songList.title}
        setClick={setIsClick}
        click={isClick}
        setId={setId}
        id={id}
      />
      {/* <p>
        <AddSong list={songList1} setList={setSongList1}></AddSong>
      </p> */}
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
