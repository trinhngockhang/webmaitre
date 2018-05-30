import React from 'react';
import { connect } from 'react-redux';
import { findProductDetailById } from '../../../../utils/request';
import { isEmptyOrUndefined } from '../../../../../../shared/helper/check-data';
import _ from 'lodash';

class ItemOwl extends React.Component {
    componentDidMount() {
        this.props.findProductDetailById(this.props.id);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!_.isEqual(nextProps.product, this.props.product)) {
            return true;
        }
        return false;
    }

    render() {
        let product = this.props.product;
        return (
            <div className="pdl-images" id="owl-pdl-images">
                <a href="" data-fancybox="gallery" data-img={isEmptyOrUndefined(product.url) ? "/static/images/unknow.png" : product.url} data-bigimg={isEmptyOrUndefined(product.url) ? "/static/images/unknow.png" : product.url} > 
                    <img src={isEmptyOrUndefined(product.url) ? "/static/images/unknow.png" : product.url} alt={ "Mái che tốt nhất tại Hà Nội" + product.name} />
                </a> 

                <a href="" data-fancybox="gallery" data-img={product.url} data-bigimg={product.url} > 
                    <img src={isEmptyOrUndefined(product.url) ? "/static/images/unknow.png" : product.url} alt={ "Mái che tốt nhất tại Hà Nội" + product.name} />
                </a> 

                <a href="" data-fancybox="gallery" data-img={product.url} data-bigimg={product.url} > 
                    <img src={isEmptyOrUndefined(product.url) ? "/static/images/unknow.png" : product.url} alt={ "Mái che tốt nhất tại Hà Nội" + product.name} />
                </a>   
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemOwl)