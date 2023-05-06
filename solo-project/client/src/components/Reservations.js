import React, {useState} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import Bar from './Bar';
import Coffee from './Coffee';
import Merch from './Merch';
import Homepage from './Homepage';
import axios from 'axios'

const Reservations = (props) => {
    const navigate = useNavigate();
    // const {form,setForm} = props
    // const [order, setOrder] = useState()


    const [order, setOrder] = useState({
        firstName:'',
        lastName:'',
        email:'',
        number:'',
    
    })
    const changeHandler = (e) =>{
        setOrder({...order, [e.target.name]:e.target.value})
    }
    

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/form', order)
        .then((res) => {
            setOrder(res.data)
            navigate('/confirm')
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

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
                            <Link to="/" element={<Homepage />} className='link'>Home</Link>
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
                    <div className='form-spacing'>
                        <div>
                            <label>First Name:</label>
                            <input type="text"
                            name="firstName"
                            onChange={changeHandler}
                            value={order.firstName}></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text"
                            name = "lastName"
                            onChange={changeHandler}
                            value={order.lastName}></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email"
                            name="email"
                            onChange={changeHandler}
                            value={order.email}></input>
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input type="number"
                            name="number"
                            onChange={changeHandler}
                            value={order.number}></input>
                        </div>
                    </div>
                    <div className='containerSpacing'>
                        <div className='spacing'>
                            <label className='labelName'>Coffee:</label>
                            <label>Dark Wizards Brew</label>
                            <input type="radio"></input>
                            <label>Espresso Patronum</label>
                            <input type="radio"></input>
                            <label>Love Potion Latte</label>
                            <input type="radio"></input>
                            <label>Muggles Mocha</label>
                            <input type="radio"></input>
                        </div>
                        <div className='spacing'>
                            <label className='labelName'>Tea:</label>
                            <label>Tri Wizards Tea</label>
                            <input type="radio"></input>
                            <label>English Breakfast</label>
                            <input type="radio"></input>
                            <label>Hogwarts Favorite</label>
                            <input type="radio"></input>
                            <label>Traveling Wizards Tea</label>
                            <input type="radio"></input>
                        </div>
                    </div>
                    <button className='submitBtn' onClick={submitHandler}>Place Order</button>
                </form>



                {/* <div>
                {
                    order.map((form, index) =>{
                        <div key={form._id}>
                            <Link to={`/form/${form._id}`} >{form} </Link>
                        {form}
                        <Link to={`/form/${form._id}`} className="fontStyles">Edit </Link>
                        
                        <button >Delete</button>
                        </div>
                    })
                }
            </div> */}
            </div>
        </div>
    );
}

export default Reservations;
