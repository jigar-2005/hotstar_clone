import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';


function Login() {
    return (
        <>
            <div className='Login text-light'>
                <div class="container-lg">
                    <h1 className='text-center mb-5'><b><u>Login</u></b></h1>
                    <form className='text-center'>
                        <h5 style={{ textAlign: "left" }}>Mobile Number</h5>
                        <input type="tel" className='px-3' name="phone_number" id="phone_number" required pattern="(?=.*\d).{8,}" maxLength="10" style={{ width: "100%", fontSize: "18px" }} autoComplete="off" />
                        <button class="btn btn-primary w-100 mt-3" type="submit">Button</button>
                    </form>
                </div>
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </>
    );
}
export default Login;
