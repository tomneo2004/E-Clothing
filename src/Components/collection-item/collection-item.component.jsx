import React from 'react';
import {CollectionItemContainer, BackgroundImage, 
    Button, FooterContainer, NameLabel, PriceLabel} from './collection-item.styles';
// import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../Redux/cart/cart.actions';

const CollectionItem = ({item, addItem})=>{

    const {name, imageUrl, price} = item;
    
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <FooterContainer>
                <NameLabel>{name}</NameLabel>
                <PriceLabel>{`$${price}`}</PriceLabel>
            </FooterContainer>
            <Button className='custom-button' onClick={()=>addItem(item)} inverted={true}>{'Add to cart'}</Button>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = (dispatch)=>({
    addItem: (item)=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);