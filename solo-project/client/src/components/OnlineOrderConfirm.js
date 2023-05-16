import React, { useEffect } from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import Footer from './Footer';


const OnlineOrderConfirm = (props) => {

    const {form,setForm} = props;
    const navigate= useNavigate()


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

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/form/${id}`)
        .then((res) =>{
            console.log('line 40', res)
            setForm(form.filter((order, index)=> order._id !== id))
        })
        .catch((err )=> console.log(err))
    }
    
    const editHandler = (order) => {
        navigate(`/update/${order._id}`)
    }
    return (
        <div>
            <div className='navbar'>
                <div className='name'>
                    <h1>Potter's Potions</h1>
                </div>
                <div className='nav-links'>
                    <Link to="/" element={<Homepage />} className='link'>Home</Link>
                    <Link to="/bar" element={<Bar />} className='link'>Bar</Link>
                    <Link to="/coffee" element={<Coffee />} className='link'>Coffee</Link>
                    <Link to="/merch" element={<Merch />} className='link'>Merch</Link>

                </div>
            </div>

            <h3>Past orders:</h3>
            <div>
            {
                form.map((order, index) => (
                    <div key={order._id} className='border border-dark'>
                        <p>Name: {order.firstName} {order.lastName}</p>
                        <p>Order:</p>
                        <button onClick={editHandler}>Edit</button>
                        <button onClick={() => deleteHandler(order._id)}>Delete</button>
                    </div>
                ))
            }
            </div>



        </div>
    );
}

export default OnlineOrderConfirm;
