import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import { Link } from "react-router-dom"

const ContactPage = () => {
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



            <div>
                <form className='form'>
                    <label className='labelName'>Contact Us!</label>
                    <label>First Name</label>
                    <input type="text"></input>
                    <label>Last Name</label>
                    <input type="text"></input>
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Phone Number</label>
                    <input type="number"></input>
                    <p>How would you like to be contacted?</p>
                    <label>Email</label>
                    <input type="checkbox"></input>
                    <label>Phone</label>
                    <input type="checkbox"></input>
                    <label>Message</label>
                    <input type="textbox"></input>

                    <button className='submitbtn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
