import React from 'react';
import {Link} from 'react-router-dom';
import {Auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import './header.styles.scss';

const Header = ({currentUser})=>{

    return (

        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>{'Shop'}</Link>
                <Link className='option' to='/contact'>{'Contact'}</Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>Auth.signOut()}>{'Sign out'}</div>
                    :
                    <Link className='option' to='/signin-signup'>{'Sign in'}</Link>
                }
                
            </div>
        </div>

    );
}

export default Header;