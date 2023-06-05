import React, { useState, useEffect } from 'react';
import { Validation } from './Validation';
import style from '../styles/SignUp.module.css';
import logo from '../assets/img/logo.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './notify';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [err, setErr] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        setErr(Validation(data, 'Login'))
    }, [data, touched])

    const submitHandler = (event) => {
        event.preventDefault();
        if(Object.keys(err).length) {
            notify('error', 'اطلاعات را به درستی وارد کنید');
            setTouched({
                email: true,
                password: true,
            })
        } else {
            notify('success', 'خوش آمدید!');
        }
    }
    const changeHandler = event => {
            setData({...data, [event.target.name]: event.target.value})
    }
    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: event.target.focus})
    }
    
    return (
        <div className={style.body}>
            <div className={style.info}>
                <h2>گروه صنعتی هارپی</h2>
                <img src={logo}/>
                <p>حساب کاربری ندارید؟ <Link to='/signUp'>ثبت نام کنید</Link></p>
            </div>
            <div className={style.main}>
                <form id={style.LoginForm} onSubmit={submitHandler}>
                    <h1>فرم ورود</h1>
                    <div className={style.inputs}>
                        <input placeholder='ایمیل' type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                        {err.email && touched.email && <span>{err.email}</span>}
                    </div>
                    <div className={style.inputs}>
                        <input placeholder='رمزعبور' type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                        {err.password && touched.password && <span>{err.password}</span>}
                    </div>
                    <div className={style.btnSubmit}>
                        <button type='submit'>ورود</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;