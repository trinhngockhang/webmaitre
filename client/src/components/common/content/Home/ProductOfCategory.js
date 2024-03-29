import React, { Component } from 'react';
import { connect } from 'react-redux'
import { isEmptyOrUndefined } from '../../../../../../shared/helper/check-data';
import { shouldUpdate } from '../../../../utils/shallowRender';
class ProductOfCategory extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(shouldUpdate(nextProps.products, this.props.products)) {
            return true;
        }
        return false;
    }
    
    render() {
        let products = this.props.products;
        return (
            <section className="home-pro-top all" key={this.props.idx}>
                <div className="containers"> 
                    <div className="tpg-txt text-center"><a href={"/product"}>{this.props.nameCategory}</a></div> 
                    <div className="pro-list owl-prolist">
                        {
                            products.map((s, i) => {
                                if(this.props.parentLength - 1 == this.props.idx) {
                                    if(!isEmptyOrUndefined(products) && i == (products.length - 1)) {
                                        this.props.libary();
                                    }
                                }
                                return (
                                    <div className="pro-item">
                                        <div className="bg-item">
                                            <div className="namepro">{isEmptyOrUndefined(s.name) ? "------" : s.name }</div>
                                            <div className="reponsive-img"> 
                                                <a href={"/chitietsanpham?category=" + this.props.parenId + "&product=" + s._id}><img src={isEmptyOrUndefined(s.url) ? "/static/images/unknow.png" : s.url } className="lazy" alt={this.props.nameCategory + "giá rẻ"}/></a>   
                                            </div>
                                            <div className="price">Liên hệ</div>
                                            <div className="cut-price">0918 370 892</div>
                                        </div>
                                        <a href={"/chitietsanpham?category=" + this.props.parenId + "&product=" + s._id} className="alink-all"></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToPropsFactory(state, ownProps) {
    return function mapStateToProps(state) {
        let products = isEmptyOrUndefined(state.productReducer.products) ? [] : state.productReducer.products.filter(s => s.parent._id == ownProps.parenId)
        return {
            products:
            products
        };
    };
}

export default connect(mapStateToPropsFactory)(ProductOfCategory);