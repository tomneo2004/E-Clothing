import React,{Component, useEffect} from 'react';
// import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
// import CollectionPage from '../CollectionPage/collectionpage.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../Redux/shop/shop.actions';
// import {createStructuredSelector} from 'reselect';
// import {selectIsCollectionLoading} from '../../Redux/shop/shop.selector';
import CollectionOverviewContainer from '../../Components/collection-overview/collection-overview-container.component';
import CollectionPageConatiner from '../CollectionPage/collectionpage-container.component';



const Shop = ({fetchCollectionsStart, match}) => {

    useEffect(()=>{
        fetchCollectionsStart();
        
    }, [fetchCollectionsStart]);
    
    return (

        <div>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageConatiner} />
        </div>
    );
    
}

const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(Shop);