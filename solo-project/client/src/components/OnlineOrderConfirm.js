import React, { useEffect, useState } from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'



const OnlineOrderConfirm = () => {
    const {_id} = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState([])
    const [form, setForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
        number:'',

    })





    useEffect(()=>{
        axios.get(`http://localhost:8000/api/form/${_id}`)
        .then((res) => {
            console.log('line 23', res)
            console.log('line 24', res.data)
            setOrder(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])




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

            <h3>Your order has been placed</h3>
            <div>
                <p>{form.firstName}</p>
            </div>
            <button>Edit your order</button>
            <button>Delete your order</button>
        </div>
    );
}

export default OnlineOrderConfirm;
