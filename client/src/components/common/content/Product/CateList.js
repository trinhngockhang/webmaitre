import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmptyOrUndefined } from '../../../../../../shared/helper/check-data';

function mapStateToProps(state) {
    return {
        products: state.productReducer.products,
    };
}

class CateList extends Component {
    render() {
        let products = this.props.products;
        return (
            <ul id="grid-sort" className="row catelist">
                {
                    products.map((s, i) => {
                        if(!isEmptyOrUndefined(products) && i == (products.length - 1)) {
                            this.props.libary()
                        }
                        return (
                            <li className={"mix col-lg-4 col-md-6 col-sm-6 col-12 mb20 category_"+ s.parent._id}>
                                <div className="colum">
                                    <figure className="hm-reponsive">
                                        <img src={isEmptyOrUndefined(s.url) ? "/static/images/unknow.png" : s.url } alt={isEmptyOrUndefined(s.parent.name) ? "" : s.parent.name + " chất lượng tốt tại Hà Nội"}/>
                                    </figure>
                                    <div className="info-list">
                                        <p className="name">{isEmptyOrUndefined(s.name) ? "----" : s.name}</p>
                                        <p className="description">
                                            {s.description}
                                        </p>
                                    </div>
                                    <a className="alink-all" href={"/chitietsanpham?category=" + s.parent._id + "&product=" + s._id}></a>
                                </div>
                            </li> 
                        )
                    })
                }
            </ul>
        );
    }
}

export default connect(mapStateToProps)(CateList);