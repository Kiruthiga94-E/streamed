import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logo, avatar } from '../../assets/images/index.js';
import './Nav.css';

function Nav() {
    const history = useHistory();
    const [transition, handleTransition] = useState(false);

    const navBarTransition = () => {
        if (window.scrollY > 100) {
            handleTransition(true);
        } else {
            handleTransition(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navBarTransition);
        return () => window.removeEventListener('scroll', navBarTransition);
    }, [])

    return (
        <div className={`nav ${transition && 'nav__solid'}`}>
            <div className='nav__container'>
                <img
                    className='nav__logo'
                    src={logo}
                    alt='logo'
                    onClick={() => history.push('/')} />
                <img
                    className='nav__avatar'
                    src={avatar}
                    alt='avatar'
                    onClick={() => history.push('/profile')} />
            </div>
        </div>
    )
}

export default Nav;