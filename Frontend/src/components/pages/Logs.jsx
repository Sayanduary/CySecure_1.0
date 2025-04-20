import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
// import { data } from 'react-router-dom'
function Logs() {
const [Data , setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:8000/api/v1/packets')
.then((res)=>{
console.log(res.data[0])
setData(res.data)
}).catch((error)=>{
console.error('Error fetching data',error)
})
},[])

  return (
    <>
    <div className='flex justify-center items-center   h-[100vh]'>
   <div className='flex justify-center items-center bg-gray-500 '>{Data.map((e,index)=>(
    <div key={index} className='flex  gap-40'>
      <p>{e.destinationIP}</p>
      <p >{e.destinationPort}</p>
      <p>{e.protocol}</p>
      <p>{e.size}</p>
      <p>{e.sourceIP}</p>
      <p>{e.sourcePort}</p>
      <p>{e.timestamp}</p>
      </div>
        ))}
        </div>
        </div>
    </>
  )
}

export default Logs
