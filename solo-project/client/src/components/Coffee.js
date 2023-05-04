import React from 'react';
import Homepage from './Homepage';
import Bar from './Bar';
import Merch from './Merch';
import { Link, useNavigate } from "react-router-dom"

const Coffee = () => {
    const navigate = useNavigate();

    const orderOnlineHandler = () => {
        navigate("/order")
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
                        <Link to="/merch" element={<Merch />} className='link'>Merch</Link>
                    </div>
                </div>
            </div>
            <div className='menu'>
            <div className='menu-row'>
               <div>
               <p>Dark Wizards Brew</p>
                <div className='menu-card'></div>
                <p>5.00</p>
               </div>
                <br />

                <div>
                <p>Espresso Patronum</p>
                <div className='menu-card'></div>
                <p>2.00</p>
                </div>
                <br />

                <div>
                <p>Love Potion Latte</p>
                <div className='menu-card'></div>
                <p>5.00</p>
                </div>
                <br />

               <div>
                <p>Muggles Mocha</p>
                <div className='menu-card'></div>
                <p>4.00</p>
               </div>
            </div>
            <div className='menu-row'>
                <div>
                    <p>Tri Wizards Tea</p>
                    <div className='menu-card'></div>
                    <p>4.00</p>
                </div>
                <br />

                <div>
                    <p>English Breakfast</p>
                    <div className='menu-card'></div>
                    <p>3.00</p>
                </div>
                <br />

               <div>
                <p>Hogwarts Favorite</p>
               <div className='menu-card'></div>
               <p>5.00</p>
               </div>
                <br />

                <div>
                    <p>Tea</p>
                <div className='menu-card'></div>
                <p>2.00</p>
                </div>
                <br/>

            </div>
            </div>



            <div className='submitBtn-Center'>
            <button onClick={orderOnlineHandler} className='submitbtn'>Order Online</button>
            </div>
        </div>
    );
}

export default Coffee;
