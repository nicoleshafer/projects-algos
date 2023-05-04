import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import { Link } from "react-router-dom"

const Merch = () => {
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Merch;
