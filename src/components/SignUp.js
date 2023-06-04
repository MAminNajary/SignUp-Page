import React, { useState, useEffect } from 'react';
import { Validation } from './Validation';
import style from '../styles/SignUp.module.css';
import logo from '../assets/img/logo.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './notify';

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
            notify('error', 'اطلاعات را به درستی وارد کنید');
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
            })
        } else {
            notify('success', 'ثبت نام با موفقیت انجام شد');
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
        <div className={style.body}>
            <div className={style.info}>
                <h2>گروه صنعتی هارپی</h2>
                <img src={logo}/>
                <p>قبلا ثبت نام کرده اید؟ <a href='#'>وارد شوید</a></p>
            </div>
            <div className={style.main}>
                <form className={style.contentForm} onSubmit={submitHandler}>
                    <h1>ثبت نام کنید!</h1>
                    <div className={style.inputs}>
                        <input placeholder='نام کاربری' type='text' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                        {err.name && touched.name && <span>{err.name}</span>}
                    </div>
                    <div className={style.inputs}>
                        <input placeholder='ایمیل' type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                        {err.email && touched.email && <span>{err.email}</span>}
                    </div>
                    <div className={style.inputs}>
                        <input placeholder='رمزعبور' type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                        {err.password && touched.password && <span>{err.password}</span>}
                    </div>
                    <div className={style.inputs}>
                        <input placeholder='تکرار رمزعبور' type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                        {err.confirmPassword && touched.confirmPassword && <span>{err.confirmPassword}</span>}
                    </div>
                    <div className={style.inputCheckbox}>
                        <label>با <a href='#'>شرایط و قوانین هارپی</a> موافقم!</label>
                        <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} />
                    </div>
                    <div className={style.btnSubmit}>
                        <button type='submit'>ثبت اطلاعات</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;