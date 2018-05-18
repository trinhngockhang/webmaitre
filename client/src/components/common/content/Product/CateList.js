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
                            <li className={"mix col-lg-4 col-md-6 col-sm-6 col-12 mb20 category_" + s.parent._id}>
                                <div className="colum">
                                    <figure className="hm-reponsive">
                                        <img src={s.url} alt={s.parent.name + "chất lượng tốt tại Hà Nội"}/>
                                    </figure>
                                    <div className="info-list">
                                        <p className="name">{s.name}</p>
                                        <p className="description">
                                            {s.description}
                                        </p>
                                        <p className="detail-logo"><img src="/static/images/uploads/baby-g.png" alt=""/></p>
                                    </div>
                                    <a className="alink-all" href=""></a>
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