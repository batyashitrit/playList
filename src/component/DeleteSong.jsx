// import React from "react";

import { useState } from "react";

function DeleteSong(props) {
  const [isClick, setIsClick] = useState(0);
  function onClick() {
    setIsClick(1);
  }
  return (
    <div className="bigBtn">
      <button className="buttondel"onClick={onClick}>Delete Song</button>
      {isClick ? (
        <select
          onChange={(e) => {
            props.setList(props.list.filter((v) => v.title != e.target.value));
            setIsClick(0);
          }}
        >
          <option>which song do you want delete?</option>
          {props.list.map((v) => (
            <option>{v.title}</option>
          ))}
        </select>
      ) : (
        ""
      )}
    </div>
  );
}
export { DeleteSong };
