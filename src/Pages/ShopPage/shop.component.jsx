import React,{Component} from 'react';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../CollectionPage/collectionpage.component';
import {Route} from 'react-router-dom';
import {Firestore, TransformCollectionsToMap} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {updateCollections} from '../../Redux/shop/shop.actions';

class Shop extends Component{
    
    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const {updateCollections} = this.props;

        const collectionRef = Firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot)=>{

            const transformedCollections = TransformCollectionsToMap(snapshot);

            updateCollections(transformedCollections);
        });
        
    }

    componentWillUnmount(){

        this.unsubscribeFromSnapshot();
    }

    render(){

        const {match} = this.props;
        return (

            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({
    updateCollections:(collectionsMap)=>dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);