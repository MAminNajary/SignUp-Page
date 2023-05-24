import React, { useState, useEffect } from 'react';
import { Validation } from './Validation';


const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });
    const [err, setErr] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        setErr(Validation(data))
    }, [data, touched])

    const submitHandler = (event) => {
        event.preventDefault();
        if(Object.keys(err).length) {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
            })
        } else {
            alert("test")
        }
    }
    const changeHandler = event => {
        if(event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }
    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: event.target.focus})
    }
    
    return (
        <div>
        <form onSubmit={submitHandler}>
            <h1>SignUp</h1>
            <div>
                <label>Name:</label>
                <input type='text' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                {err.name && touched.name && <span>{err.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                {err.email && touched.email && <span>{err.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                {err.password && touched.password && <span>{err.password}</span>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                {err.confirmPassword && touched.confirmPassword && <span>{err.confirmPassword}</span>}
            </div>
            <div>
                <label>Accept our reguation</label>
                <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} />
                {err.isAccepted && <span>{err.isAccepted}</span>}
            </div>
            <div>
                <button type='submit'>SignUp</button>
                <a href='#'>Login</a>
            </div>
        </form>
        </div>
    );
};

export default SignUp;