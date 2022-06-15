import SongRow from "./SongRow";

export default function List(props) {
  return (
    <div className="list">
      {/* <h1>Song List</h1> */}
      {props.list.map((v) => (
        <SongRow id={v.id} key={v.song}>
          <h2
            key={v.song}
            onClick={(e) => {
              props.name == e.target.outerText && props.setClick(!props.click);
              props.setN(e.target.outerText);
              props.setId(v.id)
            }}
            >
            🎵{v.song}
          </h2>
        </SongRow>
      ))}
    </div>
  );
}
