import React from 'react'
import { useState } from 'react'


export default function Search(props) {
    const [filterdList, setFiltered]=useState([])

  return (
    <div>Search
    <input type="search" onChange={(e)=>{setFiltered(props.externalList.results.filter((v)=>v.title.includes(e.target.value)))}}>
        {console.log(filterdList)}
       </input>
    </div>
  )
}
