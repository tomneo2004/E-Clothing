import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {SelectCartItems} from '../../Redux/cart/cart.selector';
import {connect} from 'react-redux';
import CartDropdown from './cart-dropdown.component';
import {withRouter} from 'react-router-dom';


const mapStateToProps = createStructuredSelector({
    cartItems:SelectCartItems
});

const CartDropdownContainer = compose(
    connect(mapStateToProps),
    withRouter

)(CartDropdown);

export default CartDropdownContainer;