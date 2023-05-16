import React from 'react';
import Homepage from './Homepage';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useNavigate } from "react-router-dom"
import Reservations from './Reservations';
import ContactPage from './ContactPage';
import About from './About';
import beans from "../images/beans.jpg"
import triwizards from "../images/triwizards.webp"
import lunaspecial from "../images/lunaspecial.jpg"
import hogwarts from "../images/hogwartsfav.jpg"
import englishbrek from "../images/englishbrek.jpg"
import coffee from "../images/coffee.jpg"
import espresso from "../images/espresso.jpg"
import mocha from "../images/mocha.jpg"
import coldbrew from "../images/coldbrew.jpg"
import Footer from './Footer';


const Coffee = () => {
    const navigate = useNavigate();

    const orderOnlineHandler = () => {
        navigate("/comingsoon")
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
                    <h3>Pick your Potion</h3>
                    <hr />
                    <div className='menu-row'>
                        <div>
                            <p>Dark Wizards Brew</p>
                            <img src={coldbrew} alt="beans" className='menu-card'></img>
                            <p>5.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Espresso Patronum</p>
                            <img src={espresso} alt="beans" className='menu-card'></img>
                            <p>2.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Love Potion Latte</p>
                            <img src={coffee} alt="coffee" className='menu-card'></img>
                            <p>5.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Muggles Mocha</p>
                            <img src={mocha} alt="beans" className='menu-card'></img>
                            <p>4.00</p>
                        </div>
                    </div>
                    <div className='menu-row'>
                        <div>
                            <p>Tri Wizards Tea</p>
                            <img src={triwizards} alt="tea" className='menu-card'></img>
                            <p>4.00</p>
                        </div>
                        <br />

                        <div>
                            <p>English Breakfast</p>
                            <img src={englishbrek} alt="tea" className='menu-card'></img>
                            <p>3.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Hogwarts Favorite</p>
                            <img src={hogwarts} alt="tea" className='menu-card'></img>
                            <p>5.00</p>
                        </div>
                        <br />

                        <div>
                            <p>Lovegood Special</p>
                            <img src={lunaspecial} alt="beans" className='menu-card'></img>
                            <p>4.00</p>
                        </div>
                        <br />

                    </div>
                </div>

                <div className='submitBtn-Center'>
                    <button onClick={orderOnlineHandler} className='submitbtn'>Order Online</button>
                </div>
            </div>




            <Footer/>
        </div>
    );
}

export default Coffee;
