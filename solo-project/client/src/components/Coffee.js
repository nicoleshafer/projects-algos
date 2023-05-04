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
                <p>Dark Wizards Brew</p>
                <div className='menu-card'></div>
                <br />
                <p>Espresso Patronum</p>
                <div className='menu-card'></div>
                <br />
                <p>Love Potion Latte</p>
                <div className='menu-card'></div>
                <br />
                <div className='menu-card'></div>
            </div>
            <div className='menu-row'>
                <div className='menu-card'></div>
                <div className='menu-card'></div>
                <div className='menu-card'></div>
                <div className='menu-card'></div>
                <div className='menu-card'></div>
            </div>
            </div>
            <div className='submitBtn-Center'>
            <button onClick={orderOnlineHandler} className='submitbtn'>Order Online</button>
            </div>
        </div>
    );
}

export default Coffee;
