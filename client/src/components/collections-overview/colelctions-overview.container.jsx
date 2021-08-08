import { connect } from "react-redux";
import { compose } from "redux";

import { selectorIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";

import CollectionsOverview from './collections-overview.component'

const mapStateToProps = (state) => ({
    isloading : selectorIsCollectionFetching(state)
})

const composeCollectionOverView = compose (
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default composeCollectionOverView;