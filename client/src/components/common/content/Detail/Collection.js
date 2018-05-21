import React from 'react';
import { connect } from 'react-redux';
import { findProductDetailById } from '../../../utils/request';
 
class Collection extends React.Component {
    render() {
        return (

        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.productReducer.product,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findProductDetailById: (id) => dispatch(findProductDetailById(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)