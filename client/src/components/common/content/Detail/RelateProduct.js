import React from 'react';
import { connect } from 'react-redux';
import { isEmptyOrUndefined } from '../../../../../../shared/helper/check-data';

class RelateProduct extends React.Component {
    render() {
        let products = this.props.products;
        console.log('products', products)
        return (
            <section className="related_product">
                <div className="container"> 
                    <div className="tpg-txt text-center"><a href="">Phụ Kiện</a></div> 
                    <ul className="pro-list row pro-list-cate" >
                        {
                            products.map((s, i) => {
                                if(i < 4) {
                                    return (
                                        <li className=" col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                                            <div className="pro-item ">
                                                <div className="bg-item">
                                                    <div className="namepro">{s.name}</div>
                                                    <div className="reponsive-img"> 
                                                        <a href=""><img src={isEmptyOrUndefined(s.url) ? "/static/images/unknow.png" : s.url} className="lazy" alt=""/></a>   
                                                    </div>
                                                    <p className="price">Liên Hệ : 0986 370 892 </p>
                                                    {/* <div className="cut-price"></div> */}
                                                </div>
                                                <a href="" className="alink-all"></a>
                                            </div>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
    }
}

export default connect(mapStateToProps)(RelateProduct)