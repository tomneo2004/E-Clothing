import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../Redux/shop/shop.selector';
import {connect} from 'react-redux';
import {compose} from 'redux';
import CollectionOverview  from './collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner

)(CollectionOverview);

export default CollectionOverviewContainer;
