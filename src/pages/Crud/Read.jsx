import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {

  const [data, setData] = useState([])
  const { id } = useParams();

  //Read Process
  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
      <div className=' w-96 h-72 border bg-white shadow px-20 pb-5  rounded '><br></br>

        <h3 className='text-xl text-center font-bold' >Detail of Product:</h3>

        {/*Product name*/}
        <div className='mb-2 pt-5'>
          <h3 className='font-semibold'>Product name:{data.pname}</h3>
        </div>

        {/*Offer*/}
        <div className='mb-2'>
          <h3 className='font-semibold'>Offer:{data.offer}</h3>
        </div>

        {/*Price*/}
        <div className='mb-2'>
          <h3 className='font-semibold'>Price:{data.price}</h3>
        </div>

        {/*Sold*/}
        <div className='mb-2'>
          <h3 className='font-semibold'>Sold:{data.sold}</h3>
        </div>

        {/*Sales*/}
        <div className='mb-2 pb-4'>
          <h3 className='font-semibold'>Sales:{data.sales}</h3>
        </div>

        {/*Update button*/}
        <Link to={`/update/${id}`}
          className='bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4  rounded me-2'>
          Edit</Link>

        {/*Back button*/}
        <Link to="/crudhome" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-2'>Back</Link>
      </div>

    </div>
  )
}

export default Read