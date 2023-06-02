import React from 'react';
import nicole from "../components/nicole.jpg"
import photo from "../components/me2.jpg"
import logo from "../components/1.png"
import logo1 from "../components/2.png"
import logo2 from "../components/3.png"
import logo3 from "../components/gold.png"


const Body = () => {
    return (
        <div className='body'>
            <div className='navBar'>
                <div >
                    <div>
                        <img
                            src={logo1}
                            alt="logo"
                            className='logo'>
                        </img>
                        {/* <img
                        src={logo2}
                        alt="logo"
                        className='logo'>
                        </img>
                        <img
                        src={logo3}
                        alt="logo"
                        className='logo'>
                        </img>
                        <img
                        src={logo1}
                        alt="logo"
                        className='logo'>
                        </img> */}
                    </div>
                </div>
                <div>
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>

                </div>
            </div>




            <div className='container'>
                <div>
                    <section className='pageOne'>
                        <div className='photo-grid'>
                            <img src={nicole}
                                alt="portrait"
                                className='nicole'></img>
                            <div className='text'>
                                <h1>Hi, I'm Nicole!</h1>
                                <p>A Full Stack Web Developer</p>
                            </div>
                        </div>
                    </section>




                    <section className='pageTwo'>
                        <div className='section-content'>
                            <h2 className='text-header'>Who am I?</h2>
                            <p className='text-display'>
                                My name is Nicole Shafer<br />
                                I am Full Stack Web Developer based in Asheville, North Carolina
                                <br />
                                I have new passion for making websites, traveling and learning.
                                <br />
                                I graduated from Coding Dojo</p>
                        </div>
                    </section>





                    <section className='pageThree'>
                        <div className='section-content'>
                            <h2 className='text-header'>My Projects</h2>
                            {/* <p className='text-display'>
                                <div className='temp-box'></div>
                                <div className='temp-box'></div>
                                <div className='temp-box'></div>
                                <div className='temp-box'></div>
                                </p> */}
                        <div className='wrapper'>
                            <div className='layer bottom'></div>
                        </div>
                        </div>
                    </section>
                    <section className='pageFour'>
                        <div className='section-content'>
                            <h2 className='text-header'>My Skills</h2>
                            <p className='text-display'>
                                My Skills
                            </p>
                        </div>
                        <div className='footer'>
                            Contact
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Body;
