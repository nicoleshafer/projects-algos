import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useNavigate } from "react-router-dom"
import Footer from './Footer';


const About = () => {
    const navigate = useNavigate()

    const socialMediaHandler = () => {
        navigate("/comingsoon")
    }

    const githubLink = () => {
        window.location.href = "https://github.com/nicoleshafer"
    }
    return (
        <div >

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
            </div>





            <div className='bodyContainer_nonHomepage'>
                <h2>About Us</h2>
                <p>London, UK</p>
                <p>Potter's is a family owned, wizard coffee shop and bar. </p>
                <p>This dreamworld was created for all of those who love coffee or beer.
                    <br />
                    <br/>
                    All Wizards and Muggles welcome!
                </p>
            

            </div>

            <Footer />

            </div>
    );
}

export default About;
