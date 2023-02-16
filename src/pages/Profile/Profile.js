import React from "react";
import { useSelector } from "react-redux";
import { Nav } from "../../components/index";
import { avatar } from '../../assets/images/index'
import { auth } from "../../firebase";
import { Plans } from "../index";
import './Profile.css';

function Profile() {
    const user = useSelector((state) => state.user.user);
    return (
        <div className='profile'>
            <Nav />
            <div className='profile__container'>
                <h1>Profile Actions</h1>
                <div className='profile__info'>
                    <img src={avatar} alt='avatar' />
                    <div className='profile__details'>
                        <h2>{user.email}</h2>
                        <div className='profile__plans'>
                            <h3>Plans</h3>
                            <Plans />
                            <button 
                                onClick={() => auth.signOut()} 
                                className='profile__signOut'>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;