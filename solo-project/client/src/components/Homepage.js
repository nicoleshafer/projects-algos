import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
import Bar from './Bar';
import Coffee from './Coffee';
import Merch from './Merch';
import icedcoffee from "../images/icedcoffee.jpg"
import beers from "../images/beers.jpg"
import train from "../images/train.jpg"
import Footer from './Footer';

const Homepage = (props) => {
    const { _id } = useParams()
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const { form, setForm } = props;
    const [errors, setErrors] = useState({})
    const [review, setReview] = useState({
        firstName: '',
        lastName: '',
        email: '',
        review: '',

    })

    const reviewHandler = () => {
        setIsVisible(!isVisible)
    }
    const changeHandler = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/form`)
            .then((res) => {
                console.log('line 23', res)
                console.log('line 24', res.data)
                setForm(res.data.allForm)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/form/${idFromBelow}`)
            .then((res) => {
                console.log('line 60', res)
                setForm(form.filter((reviews, index) => reviews._id !== idFromBelow))
            })
            .catch((err) => console.log(err))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/form',
            review)
            .then((res) => {
                setIsVisible(false)
                setForm([...form, res.data])
                setReview({
                    firstName: '',
                    lastName: '',
                    email: '',
                    review: '',
                })
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    const coffee = () =>{
        navigate("/coffee")
    }

    const bar = () =>{
        navigate("/bar")
    }

    const merch = () =>{
        navigate("/merch")
    }

    return (
        <div>
            <div className='navbar'>
                <div className='name'>
                    <h1>Potter's Potions</h1>
                </div>
                <div className='nav-links'>
                    <Link to="/bar" element={<Bar />} className='link'>Bar</Link>
                    <Link to="/coffee" element={<Coffee />} className='link'>Coffee</Link>
                    <Link to="/merch" element={<Merch />} className='link'>Merch</Link>

                </div>
            </div>











            <div className='bodyContainer'>
                <div >
                    <div>
                        <img src={icedcoffee} alt="coffee" className='column' onClick={coffee}></img>
                        <Link to="/coffee" element={<Coffee />} className='homepage-words'>Potions</Link>
                    </div>

                </div>
                <div>
                    <div>
                        <img src={beers} alt="beer" className='column' onClick={bar}></img>
                        <Link to="/bar" element={<Bar />} className='homepage-words'>Poisons</Link>
                    </div>
                </div>
                <div >
                    <img src={train} alt="beer" className='column' onClick={merch}></img>
                    <Link to="/merch" element={<Merch />} className='homepage-words'>Merch</Link>

                </div>

            </div>




            <div className='space'>{/* empty space */}</div>




            <div className='reviews'>
                <div className='review-name'>
                    <h3 className='review-name'>Reviews</h3>
                    <button type="button" className="btn btn-light" onClick={reviewHandler}>Leave a review</button>

                </div>
                <div className='review-form'>

                    {isVisible &&
                        <form className='form'>
                            <label className='labelName'>Online review</label>
                            <div className='form-spacing'>
                                <div>
                                    <label>First Name:</label>
                                    <input type="text"
                                        name="firstName"
                                        onChange={changeHandler}
                                        value={review.firstName}></input>
                                        {
                                            errors.firstName?
                                            <p className='text-danger'>{errors.firstName.message}</p>:
                                            null
                                        }
                                </div>
                                <div>
                                    <label>Last Name:</label>
                                    <input type="text"
                                        name="lastName"
                                        onChange={changeHandler}
                                        value={review.lastName}></input>
                                        {
                                            errors.lastName?
                                            <p className='text-danger'>{errors.lastName.message}</p>:
                                            null
                                        }
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input type="email"
                                        name="email"
                                        onChange={changeHandler}
                                        value={review.email}></input>
                                        {
                                            errors.email?
                                            <p className='text-danger'>{errors.email.message}</p>:
                                            null
                                        }
                                </div>
                                <div className='form-review'>
                                    <textarea placeholder='Write a review'
                                        name="review"
                                        onChange={changeHandler}
                                        value={review.review}
                                    ></textarea>
                                    {
                                            errors.review?
                                            <p className='text-danger'>{errors.review.message}</p>:
                                            null
                                    }
                                </div>
                            </div>

                            <button className='submitbtn' onClick={submitHandler}>Submit</button>
                        </form>}

                </div>




                <div className='reviews-outerbox'>
                    <div className='reviews-innerbox'>
                        <div>
                        <h4>Taylor Smith</h4>
                        <p>If you love all things magic, Potter's is a must!!</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='reviews-innerbox'>
                        <div>
                        <h4>Alexis Kuszaj</h4>
                        <p>This place makes me so happy</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='reviews-innerbox'>
                        <div>
                        <h4>Parker Williams</h4>
                        <p>Best coffee!!</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='reviews-innerbox'>
                        <div>
                        <h4>De Wilson</h4>
                        <p>Great beers, awesome service!</p>
                        </div>
                        <div></div>
                    </div>
                    {form.map((reviews) => (
                        <div key={reviews._id}>
                            <div className='reviews-innerbox'>
                                <div>
                                    <h4>{reviews.firstName} {reviews.lastName}</h4>
                                    <p>{reviews.review}</p>
                                </div>
                                <div>
                                    <Link to={`/update/${reviews._id}`} 
                                    className='reviews-button'>Edit </Link>
                                    
                                    <button type="button"
                                        className="reviews-button"
                                        onClick={() => deleteHandler(reviews._id)}
                                    >Delete</button>
                                </div>
                            </div>
                        </div>))}

                </div>







            </div>

        <Footer />



        </div>
    );
}

export default Homepage;
