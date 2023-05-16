import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import { Link, useNavigate } from "react-router-dom"
import sweater from "../images/sweater.jpg"
import scarf from '../images/scarf.jpg'
import mug from '../images/mug.jpg'
import mug2 from '../images/second_mug.jpg'
import Reservations from './Reservations';
import ContactPage from './ContactPage';
import About from './About';
import Footer from './Footer';

const Merch = () => {
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
                <div className='menu'>
                    <div className='menu-row'>
                        <div>
                            <p>Hogwarts Sweater</p>
                            <div className='menu-card'>
                                <img src={sweater} alt="sweater" className='menu-card' />
                            </div>
                            <p>55.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Gryffindor Scarf</p>
                            <div className='menu-card'>
                                <img src={scarf} alt="scarf" className='menu-card' />
                            </div>
                            <p>32.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Witches Brew Mug</p>
                            <div className='menu-card'>
                                <img src={mug} alt="mug" className='menu-card' />
                            </div>
                            <p>15.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Mug of Magic</p>
                            <div className='menu-card'>
                                <img src={mug2} alt="sweater" className='menu-card' />
                            </div>
                            <p>14.00</p>
                        </div>
                    </div>
                </div>

                <h4 className='middleText'>Online sales are currently not available</h4>
            </div>


            <Footer/>

        </div>
    );
}

export default Merch;
