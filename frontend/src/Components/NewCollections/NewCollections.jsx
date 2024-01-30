import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import Item from '../Items/Item'

function NewCollections() {
  const[new_collection,setNew_collection] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/newCollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))

  },[])

  return (
    <div className='new-collections new-collections flex flex-col items-center gap-10 mb-100'>
        <h1 className='text-#171717 text-200 font-semibold'>New Collections</h1>
        <hr className="w-200 h-120 rounded-10 bg-gray-800" />

        <div className='collections '>
            {new_collection.map((item , i) => {
                 return <Item className="item" key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default NewCollections