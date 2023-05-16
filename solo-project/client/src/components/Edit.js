import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Homepage from './Homepage';
import Coffee from './Coffee';
import Bar from './Bar';
import Merch from './Merch';
import axios from 'axios';
import Footer from './Footer';

const Edit = (props) => {
    const navigate = useNavigate()
    const { _id } = useParams()
    // const [isVisible, setIsVisible] = useState(false)
    // const { form, setForm } = props;
    const [errors, setErrors] = useState({})
    const [review, setReview] = useState({
        firstName: '',
        lastName: '',
        email: '',
        review: '',

    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/form/${_id}`)
            .then((res) => {
                console.log('line 37', res)
                console.log('line 38', res.data)
                setReview(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])


    const changeHandler = (e) =>{
        setReview({...review, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/form/${_id}`,
            review
        )
        .then((res)=>{
            console.log("update:line 57", res);
            console.log("update:line 58", res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
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

                <form className='form' onSubmit={submitHandler}>
                            <label className='labelName'>Update review for {review.firstName}</label>
                            <div className='form-spacing'>
                                <div>
                                    <label>First Name:</label>
                                    <input type="text"
                                        name="firstName"
                                        onChange={changeHandler}
                                        value={review.firstName} />
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
                                        value={review.lastName} />
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
                                        value={review.email}
                                        onChange={changeHandler} />
                                        {
                                            errors.email?
                                            <p className='text-danger'>{errors.email.message}</p>:
                                            null
                                        }
                                </div>
                                <div className='form-review'>
                                    <textarea
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

                            <button className='submitBtn'>Submit</button>
                        </form>
            </div>



        <Footer />



        </div>





    );
}

export default Edit;
