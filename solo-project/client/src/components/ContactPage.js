import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useNavigate } from "react-router-dom"
import Reservations from './Reservations';
import About from './About';
import Footer from './Footer';

const ContactPage = () => {
    const navigate = useNavigate()

    const socialMediaHandler = () => {
        navigate("/comingsoon")
    }

    const githubLink = () => {
        window.location.href = "https://github.com/nicoleshafer"
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



            <div className='bodyContainer_nonHomepage'>
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
                    <textarea placeholder='Write a message here'></textarea>

                    <button className='submitbtn'>Submit</button>
                </form>
            </div>




            <Footer/>
        </div>
    );
}

export default ContactPage;
