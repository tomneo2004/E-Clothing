import React from 'react';

// import CollectionItem from '../../Components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectShopCollection} from '../../Redux/shop/shop.selector';

import {CollectionContainer, Title, ItemContainer, Item} from './collectionpage.styles';

const CollectionPage = ({collection})=>{
    
    const {title, items} = collection;
    
    return (
        <CollectionContainer>
            <Title>{title}</Title>
            <ItemContainer>
                {
                    items.map(item=><Item key={item.id} item={item} />)
                }
            </ItemContainer>
        </CollectionContainer>
    );
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);