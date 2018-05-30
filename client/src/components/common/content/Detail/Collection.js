import React from 'react';
import { connect } from 'react-redux';
import { findProductByCategory } from '../../../../utils/request';
import { isEmptyOrUndefined } from '../../../../../../shared/helper/check-data'; 
import { shouldUpdate } from '../../../../utils/shallowRender';

class Collection extends React.Component {
    componentWillMount() {
        this.props.findProductByCategory(this.props.categoryId);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(shouldUpdate(nextProps.products, this.props.products)) {
            return true;
        }
        return false;
    }

    render() {
        let products = this.props.products;
        return (
            <div className="pdl-collection all mt20 text-center">
                <div className="title-pdl"><span>Sản phẩm liên quan</span></div>
                <div className="pdl-collection">
                    <ul className="row l">
                        {
                            products.map((s, i) => {
                                if(i <= 8) {
                                    return (
                                        <li className=" col-lg-4 col-md-6 col-sm-6 col-6" key={i}>
                                            <div className="pro-item">
                                                <figure className="reponsive-img"> 
                                                    <a href={"/chitietsanpham?category=" + this.props.categoryId + "&product=" + s._id}><img src={isEmptyOrUndefined(s.url) ? "/static/images/unknow.png" : s.url} className="lazy" alt={s.name + " bền và rẻ tại Hà Nội" }/></a>   
                                                </figure> 
                                            </div>
                                        </li>
                                    )
                                }     
                            })
                        }        
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findProductByCategory: (id) => dispatch(findProductByCategory(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)