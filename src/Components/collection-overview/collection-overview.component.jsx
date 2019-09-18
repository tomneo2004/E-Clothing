import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../Redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect} from 'react-redux';
import {CollectionOverviewContainer} from './collection-overview.styles';

const CollectionOverview = ({collections, match})=>{
    return (

        <CollectionOverviewContainer>
            {
                collections.map(({id, ...otherProps})=>{

                    return <CollectionPreview key={id} {...otherProps} />
                })
            }
        </CollectionOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);