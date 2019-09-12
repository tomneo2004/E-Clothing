import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../Redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect} from 'react-redux';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections, match})=>{
    return (

        <div>
            {
                collections.map(({id, ...otherProps})=>{

                    return <CollectionPreview key={id} {...otherProps} />
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);