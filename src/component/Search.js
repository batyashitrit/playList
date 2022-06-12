import React from 'react'
import { useState } from 'react'


export default function Search(props) {
    const [filterdList, setFilteredList]=useState([])

  return (
    <div>
    <input type="search" className='search' placeholder='Search' onChange={(e)=>{setFilteredList(props.externalList.results.filter((v)=>v.title.toLowerCase().includes(e.target.value.toLowerCase())))}}>
       </input>
       <div>{filterdList.map(v=> 
        <h3 className='list'>{v.title}</h3>)}</div>
    </div>
  )
}
