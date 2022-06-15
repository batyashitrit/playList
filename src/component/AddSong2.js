import React from "react";

export default function AddSong2(props) {
 console.log(props.children.list)
  return (
    <div>
      <button
        className="btn"
        id={props.id}
        onClick={(e) => {
          props.children.setList([...props.children.list,
            props.externalList.filter((v) => v.id == e.target.id)]
          );
        }}
      >
        🤍
      </button>
    </div>
  );
}
