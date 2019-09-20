import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionLoading} from '../../Redux/shop/shop.selector';
import CollectionPage from './collectionpage.component';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionLoading
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner

)(CollectionPage);

export default CollectionPageContainer;