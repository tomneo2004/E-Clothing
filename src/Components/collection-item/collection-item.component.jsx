import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({name, imageUrl, price})=>{

    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            ></div>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$${price}`}</span>
            </div>
            <CustomButton inverted={true}>{'Add to cart'}</CustomButton>
        </div>
    );
}

export default CollectionItem;