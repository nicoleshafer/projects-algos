import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Merch from './Merch';
import { Link } from "react-router-dom"
import Bar from './Bar';

const ComingSoon = () => {
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




            <div className='componentContainer'>
                <p className='comingSoon'>Coming Soon</p>
            </div>
        </div>
    );
}

export default ComingSoon;
