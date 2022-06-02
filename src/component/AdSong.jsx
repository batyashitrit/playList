import React from "react";
import { useState } from "react";

function AddSong(props) {
  const [isClicked, setisClicked] = useState(0);
  const [newSong, SetNewSong] = useState("");

  function onClick1() {
    setisClicked(1);
  }
  return (
    <div className="button">
      {!isClicked ? <button onClick={onClick1}>AddSong</button> : ""}
      {isClicked ? (
        <>
          <input
            type="text"
            placeholder="what's your new song?"
            name="newSong"
            onChange={(e) => {
              SetNewSong(e.target.value);
              //   console.log(newSong);
            }}
          />
          <button
            onClick={(e) => {
              setisClicked(0);

              //   props.list.push({ song: newSong });
              props.setList([...props.list, { song: newSong }]);
              console.log(props.list);
            }}
          >
            Add to my list
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export { AddSong };
