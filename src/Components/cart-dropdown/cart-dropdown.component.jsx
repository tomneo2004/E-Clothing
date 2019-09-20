import React from 'react';
import {CardDropdownContainer, CardItemsContainer, 
    CardEmptyContainer, Button} from './card-dropdown.styles';
// import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
// import {SelectCartItems} from '../../Redux/cart/cart.selector.js';
// import {createStructuredSelector} from 'reselect';
// import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/cart/cart.actions.js';



const CartDropdown = ({cartItems, history, dispatch})=>{

    return (
        <CardDropdownContainer>
            <CardItemsContainer>
                {
                    cartItems.length > 0?
                    cartItems.map(item=><CartItem key={item.id} item={item} />)
                    :
                    <CardEmptyContainer>{'Cart is empty'}</CardEmptyContainer>
                }
            </CardItemsContainer>
            <Button onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>{'Check out'}</Button>
        </CardDropdownContainer>
    );
}

// const mapStateToProps = createStructuredSelector({
//     cartItems:SelectCartItems
// })

export default CartDropdown;