import React from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {SelectCurrentUser} from '../../Redux/user/user.selector';
import {SelectCartHidden} from '../../Redux/cart/cart.selector';

const Header = ({currentUser, cartHidden})=>{

    return (

        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/shop'>{'Shop'}</OptionLink>
                <OptionLink to='/contact'>{'Contact'}</OptionLink>
                {
                    currentUser?
                    <OptionDiv onClick={()=>Auth.signOut()}>{'Sign out'}</OptionDiv>
                    :
                    <OptionLink to='/signin-signup'>{'Sign in'}</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                cartHidden?
                null
                :
                <CartDropdown />
            }
            
        </HeaderContainer>

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser:SelectCurrentUser,
    cartHidden:SelectCartHidden
});

export default connect(mapStateToProps)(Header);