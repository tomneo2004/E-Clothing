import React,{Component} from 'react';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../CollectionPage/collectionpage.component';
import {Route} from 'react-router-dom';
import {Firestore, TransformCollectionsToMap} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {updateCollections} from '../../Redux/shop/shop.actions';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';

const SpinnerCollectionOverview = WithSpinner(CollectionOverview);
const SpinnerCollectionPage = WithSpinner(CollectionPage);

class Shop extends Component{

    state = {
        loading:true
    }
    
    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const {updateCollections} = this.props;

        const collectionRef = Firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot)=>{

            const transformedCollections = TransformCollectionsToMap(snapshot);

            updateCollections(transformedCollections);

            this.setState({loading:false});
        });
        
    }

    componentWillUnmount(){

        this.unsubscribeFromSnapshot();
    }

    render(){

        const {match} = this.props;
        const {loading} = this.state;
        return (

            <div>
                <Route exact path={`${match.path}`} render={(props)=>(<SpinnerCollectionOverview isLoading={loading} {...props} />)} />
                <Route exact path={`${match.path}/:collectionId`} render={(props)=>(<SpinnerCollectionPage isLoading={loading} {...props} />)} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({
    updateCollections:(collectionsMap)=>dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);