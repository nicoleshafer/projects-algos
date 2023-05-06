import React, { useEffect, useState } from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'



const OnlineOrderConfirm = (props) => {
    const {_id} = useParams()
    const navigate = useNavigate();
    const {form,setForm} = props;


    // const [order, setOrder] = useState({
    //     firstName:'',
    //     lastName:'',
    //     email:'',
    //     number:'',
    
    // })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/form/`)
        .then((res) => {
            console.log('line 23', res)
            console.log('line 24', res.data)
            setForm(res.data.allForm)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const deleteHandler = (_id) =>{
        axios.delete(`http://localhost:8000/api/form/${_id}`)
        .then((res) =>{
            console.log('line 40', res)
            setForm(form.filter((order, index)=>order._id !== _id))
        })
        .catch((err )=> console.log(err))
    }

    return (
        <div>
            <div className='entireNav'>
                <div className='navbar bg-dark'>
                    <div className='name'>
                        <h1>Potter's Potions</h1>
                    </div>
                </div>
                <div className='nav-links'>
                    <div>
                        <Link to="/" element={<Homepage />} className='link'>Home</Link>
                        <Link to="/bar" element={<Bar />} className='link'>Bar</Link>
                        <Link to="/coffee" element={<Coffee/>} className='link'>Coffee</Link>
                        <Link to="/merch" element={<Merch/>} className='link'>Coffee</Link>
                    </div>
                </div>
            </div>

            <h3>Past orders:</h3>
            <div>
            {
                form.map((order) => (
                    <div key={order._id} className='border border-dark'>
                        <p>Name: {order.firstName} {order.lastName}</p>
                        <p>Order:</p>
                        <button>Edit</button>
                        <button onChange={deleteHandler}>Delete</button>
                    </div>
                ))
            }
            </div>



        </div>
    );
}

export default OnlineOrderConfirm;
