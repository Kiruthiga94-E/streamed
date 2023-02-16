import React, { useRef } from "react";
import { auth } from "../../firebase";
import { logo } from "../../assets/images/index";
import './Login.css';

function Login() {
    const inputRefText = useRef(null);
    const inputRefMask = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(inputRefText.current.value, inputRefMask.current.value)
            .then((authUser) => {
                console.log(authUser);
            }).catch((error) => {
                alert(error.message);
            });
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(inputRefText.current.value, inputRefMask.current.value)
            .then((authUser) => {
                console.log(authUser);
            }).catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className='signUp'>
            <div className='signUp__backdrop'>
                <img className='signUp__logo' src={logo} alt='backdrop' />
                <div className='signUp__overlay' />
            </div>
            <div className="signUp__panel">
                <div className="signUp__formContainer">
                    <h3 className="signUp__title">Sign In (or) Sign up below</h3>
                    <form className='signUp__form'>
                        <div className="signUp__formDetails">
                            <input ref={inputRefText} type="text" name="" required="" />
                            <label>Email</label>
                        </div>
                        <div className="signUp__formDetails">
                            <input ref={inputRefMask} type="password" name="" required="" />
                            <label>Password</label>
                        </div>
                        <div className="signUp__buttonContainer">
                            <a>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <button type="submit" className='signUp__signUpButton' onClick={signIn}>Sign In</button>
                            </a>
                        </div>
                        <h4>
                            <span className='signUp__infoText'>New here?</span>
                            <span className='signUp__link' onClick={register}>Get Streamed, Sign up with just one click!</span>
                        </h4>
                    </form>
                </div>
                <div className="signUp__side">
                    <div>
                        <h2>Your streaming starts at just 9.99$ per/month</h2>
                    </div>
                    <div className="signUp__features">
                        <h3>What you get!</h3>
                        <ul>
                            <li>Unlimited Movies, TV shows and Vidoes</li>
                            <li>Stream at 720p, 1080p and 4K HDR</li>
                            <li>Watch Party, Offline Downloads, and much more...</li>
                        </ul>
                        <h3>Get Streamed now!</h3>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;