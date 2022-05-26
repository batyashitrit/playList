import SongRow from "./SongRow"
import SongCard from "./SongCard"
import { useState } from "react"

export default function List(props){
     function openCard(props){
        setIsClick(1)
        }
    return(
        <>
<h1>Song List</h1>
{props.list.map(v=> <SongRow ><h2 onClick={openCard} >{v.song}</h2></SongRow>)}
    </>
    )
}

