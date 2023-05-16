import React from 'react';
import Homepage from './Homepage';
import Coffee from './Coffee';
import Merch from './Merch';
import { Link, useNavigate } from "react-router-dom"
import location from "../images/location.jpg"
import Footer from './Footer';

const Bar = () => {

    return (
        <div>
            <div className='navbar'>
                <div className='name'>
                    <h1>Potter's</h1>
                </div>
                <div className='middle-title'>
                <h3 className='title'>Beer Garden</h3>

                </div>
                <div className='nav-links'>
                    <Link to="/" element={<Homepage />} className='link'>Home</Link>
                    <Link to="/coffee" element={<Coffee />} className='link'>Coffee</Link>
                    <Link to="/merch" element={<Merch />} className='link'>Merch</Link>

                </div>
            </div>


            <div className='bodyContainer_nonHomepage'>
                <div className='container bodyContainer_nonHomepage'>
                    <img src={location} alt="background" className='background-img'></img>
                    <div className='text-overlay'>
                        <h3> Pick your poison</h3>
                        <hr />
                        <h4 >Potter's ButterBeer</h4>
                        <h6>Edinburgh, Scotland</h6>
                        <h4 >Guinness</h4>
                        <h6>Dublin, Ireland </h6>
                        <h4>Black Magic</h4>
                        <h6>Cornwall, England</h6>
                        <h4>Black Magic</h4>
                        <h6>Asheville, North Carolina</h6>
                    </div>
                </div>
            </div>


            <Footer />


        </div>
    );
}

export default Bar;
