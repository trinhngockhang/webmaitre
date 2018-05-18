import React, { Component } from 'react';
import { connect } from 'react-redux'
import { isEmptyOrUndefined } from '../../../../../../shared/helper/check-data';

class ProductOfCategory extends Component {
    render() {
        let products = this.props.products;
        return (
            <section className="home-pro-top all" key={this.props.idx}>
                <div className="container"> 
                    <div className="tpg-txt text-center"><a href="">{this.props.nameCategory}</a></div> 
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
                                            <div className="namepro">{s.name}</div>
                                            <div className="reponsive-img"> 
                                                <a href=""><img src={s.url} className="lazy" alt={this.props.nameCategory + "giá rẻ"}/></a>   
                                            </div>
                                            <div className="price">Liên hệ</div>
                                            <div className="cut-price">0000000000</div>
                                        </div>
                                        <a href="" className="alink-all"></a>
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