import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {
    const [values, setValues] = useState({
        pname: '',
        offer: '',
        price: '',
        sold: '',
        sales: ''
    })

    //Navigate process
    const navigate = useNavigate();

    //Create product process
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
            .then(res => {
                console.log(res);
                navigate('/crudhome')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='flex justify-center items-center h-screen bg-indigo-600'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>

                {/*Title*/}
                <h1 className='text-center font-bold text-2xl'>Add a Product</h1>

                <form onSubmit={handleSubmit}>

                    <div className='mb-2'>
                        <label htmlFor='pname' className='block text-gray-700 text-sm font-bold mb-2 pt-10'>Product Name:</label>

                        <input
                            type='text'
                            name='name'
                            placeholder='Entre the product name'
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={e => setValues({ ...values, pname: e.target.value })}
                        />
                    </div>

                    {/*Offer*/}
                    <div className='mb-2'>
                      <label htmlFor='offer' className='block text-gray-700 text-sm font-bold mb-2'>Offer:</label>

                        <input
                            type='text'
                            name='name'
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter the Offer'
                            onChange={e => setValues({ ...values, offer: e.target.value })}
                        />

                    </div>

                     {/*Price*/}
                    <div className='mb-2'>
                        <label htmlFor='price' className='block text-gray-700 text-sm font-bold mb-2'>Price:</label>

                        <input 
                           type='text'
                           name='name' 
                           className='shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter the price'
                           onChange={e => setValues({ ...values, price: e.target.value })} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='sold' className='block text-gray-700 text-sm font-bold mb-2'>Sold:</label>
                        <input type='text' name='name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter the Sold'
                            onChange={e => setValues({ ...values, sold: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='sales' className='block text-gray-700 text-sm font-bold mb-2'>Sales:</label>
                        <input type='text' name='name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter the sales:'
                            onChange={e => setValues({ ...values, sales: e.target.value })} />
                    </div>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-2'>Submit</button>
                    <Link to="/crudhome" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-2">Back</Link>
                </form>
            </div>
        </div>
    )
}


export default Create