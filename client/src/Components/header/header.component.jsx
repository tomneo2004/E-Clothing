import React from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown-container.component';
import {createStructuredSelector} from 'reselect';
import {SelectCurrentUser} from '../../Redux/user/user.selector';
import {SelectCartHidden} from '../../Redux/cart/cart.selector';
import {SignOutStart} from '../../Redux/user/user.actions';

const Header = ({currentUser, cartHidden, signoutStart})=>{

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
                    <OptionDiv onClick={()=>signoutStart()}>{'Sign out'}</OptionDiv>
                    :
                    <OptionLink to='/signin-signup'>{'Sign in'}</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                cartHidden?
                null
                :
                <CartDropdownContainer />
            }
            
        </HeaderContainer>

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser:SelectCurrentUser,
    cartHidden:SelectCartHidden
});

const mapDispatchToProps = (dispatch)=>({
    signoutStart:()=>dispatch(SignOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);