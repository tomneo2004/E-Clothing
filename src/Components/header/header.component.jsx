import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {SelectCurrentUser} from '../../Redux/user/user.selector';
import {SelectCartHidden} from '../../Redux/cart/cart.selector';

const Header = ({currentUser, cartHidden})=>{

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
                <CartIcon />
            </div>
            {
                cartHidden?
                null
                :
                <CartDropdown />
            }
            
        </div>

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser:SelectCurrentUser,
    cartHidden:SelectCartHidden
});

export default connect(mapStateToProps)(Header);