import React from 'react';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../CollectionPage/collectionpage.component';
import {Route} from 'react-router-dom';

const Shop = ({match})=>{
    
    return (

        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default Shop;