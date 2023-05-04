import React from 'react';
import { Link} from "react-router-dom"
import Bar from './Bar';
import Coffee from './Coffee';
import Merch from './Merch';
import Homepage from './Homepage';


const Reservations = () => {
    return (
        <div>
            <div>
            <div className='entireNav'>
                <div className='navbar'>
                    <div className='name'>
                        <h1>Potter's Potions</h1>
                    </div>
                </div>
                <div className='nav-links'>
                    <div>
                        <Link to="/" element={<Homepage/>} className='link'>Home</Link>
                        <Link to="/bar" element={<Bar />} className='link'>Bar</Link>
                        <Link to="/coffee" element={<Coffee />} className='link'>Coffee</Link>
                        <Link to="/merch" element={<Merch />} className='link'>Merch</Link>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <form className='form'>
                    <label className='labelName'>Online Order</label>
                    <div>
                        <label>First Name:</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Coffee:</label>
                        <input type="radio"></input>
                    </div>
                    <div>
                        <label>Tea:</label>
                        <input type="radio"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservations;
