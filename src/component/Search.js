import React from "react";
import SongCard from "./SongCard";
import { useState, useEffect } from "react";
import AddSong2 from "./AddSong2";
export default function Search(props) {
  const [filterdList, setFilteredList] = useState([]);
  const axios = require("axios");
  const [externalList, setExternalList] = useState([]);
  const [render, setRender] = useState(0);

  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: { query: filterdList, safesearch: "false" },
    headers: {
      "X-RapidAPI-Key": "3e6c1b205amsha8baa994aa99fcbp1e2507jsn6231381c4ded",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setExternalList(response.data.results);
      })
      // .then((response) => setExternalList(response.data))
      .catch(function (error) {
        console.error(error);
      });
  }, [filterdList]);

  return (
    <div>
        <div className="externalList">
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setFilteredList(e.target.value);
          }}
        ></input>
      </div>
      {console.log(props.list)}
      {render ? <SongCard id={props.id}/> : <div></div>}
      {externalList?.map((v) => (
        <h4
          className="line"
          onClick={() => {
            setRender(!render);
            props.setId(v.id);
          }}
          >
          {v.title}
          <AddSong2
            id={props.id}
            externalList={externalList}
            setExternalList={setExternalList}
          >
            {props}
          </AddSong2>
        </h4>
        // <h2>{v.title}</h2>
        //  <><h2 > 🎵 {v.title}</h2><div ><AddSong2 id= {v.id} externalList= {props.externalList}>{props}</AddSong2></div></>
        ))}
        </div>
    </div>
  );
}
