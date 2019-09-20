import React,{Component} from 'react';
// import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
// import CollectionPage from '../CollectionPage/collectionpage.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../Redux/shop/shop.actions';
// import {createStructuredSelector} from 'reselect';
// import {selectIsCollectionLoading} from '../../Redux/shop/shop.selector';
import CollectionOverviewContainer from '../../Components/collection-overview/collection-overview-container.component';
import CollectionPageConatiner from '../CollectionPage/collectionpage-container.component';



class Shop extends Component{

    componentDidMount(){

        const {fetchCollectionsAsync} = this.props;

        fetchCollectionsAsync();
    }

    render(){

        const {match} = this.props;
        
        return (

            <div>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageConatiner} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchCollectionsAsync:()=>dispatch(fetchCollectionsStartAsync())
});


export default connect(null, mapDispatchToProps)(Shop);