import React,{Component, useEffect, lazy, Suspense} from 'react';
// import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
// import CollectionPage from '../CollectionPage/collectionpage.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../Redux/shop/shop.actions';
// import {createStructuredSelector} from 'reselect';
// import {selectIsCollectionLoading} from '../../Redux/shop/shop.selector';
// import CollectionOverviewContainer from '../../Components/collection-overview/collection-overview-container.component';
// import CollectionPageConatiner from '../CollectionPage/collectionpage-container.component';
import Spinner from '../../Components/with-spinner/with-spinner.component';

const CollectionOverviewContainer = lazy(()=>import('../../Components/collection-overview/collection-overview-container.component'));
const CollectionPageConatiner = lazy(()=>import('../CollectionPage/collectionpage-container.component'));



const Shop = ({fetchCollectionsStart, match}) => {

    useEffect(()=>{
        fetchCollectionsStart();
        
    }, [fetchCollectionsStart]);
    
    return (

        <div>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageConatiner} />
            </Suspense>
        </div>
    );
    
}

const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(Shop);