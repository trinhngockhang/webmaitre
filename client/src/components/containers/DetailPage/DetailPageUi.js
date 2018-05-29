import FeaturePageUi from "../FeaturePage/FeaturePage";
import { isEmptyOrUndefined } from "../../../../../shared/helper/check-data";
import { libary } from "../../../../../static/js/libary";
import { BreadCrumb } from "../../common/content/Product/BreadCrumb";
import ItemOwl from '../../common/content/Detail/ItemOwl';
import { handleScript } from '../../../utils/handleScript';
import Collection from '../../common/content/Detail/Collection';
import RelateProduct from '../../common/content/Detail/RelateProduct';

export default class DetailPageUi extends FeaturePageUi {
    static async getInitialProps({ query: { category, product } }) {
        return { category, product }
    }

    componentDidMount() {
        libary();
        handleScript("https://sp.zalo.me/plugins/sdk.js");

    }

    showContent = () => {
        return (
            <main class="content-main pt100">
                {BreadCrumb()}
                <section class="main-detail">
                    <div class="rowdetail">
                        <div class="container">
                            <div class="row">
                                <aside class="pd-left mb15">
                                    <ItemOwl id={this.props.product} />
                                    <Collection categoryId={this.props.category} />
                                </aside>
                                <aside class="pd-right mb15">
                                    {/* <a class="collection" href=""><img src="/static/images/uploads/g-shock.png" alt="" /></a> */}
                                    
                                    <h1 class="pName">Sản phẩm của hoàng quý</h1>
                                    <div class="price">
                                        <span class="old-price"> 
                                        <img src="http://www.justgoholidayz.com/pic/call.png" style={{width:"50px" , height:"40px"}}/>Liên Hệ : 
                                        <br/><br/><br/>- 0918 370 892 <br/><br/>- 0986 370 892 <br/><br/>- 0976 947 892<br />
                                            <br />
                                        </span>
                                        

                                    </div>
                                   
                                   
                                    <div class="button-buy clear">
                                        <a href="https://www.facebook.com/maiche.hoangquy?ref=br_rs" class="btn btn-black mb10">Liên hệ qua Facebook</a>
                                        <a href="tel:+84976947892 " title="" class="btn buy_now mb10"><b>Đặt làm ngay</b><span> Thanh toán tại nhà hoặc qua thẻ ngân hàng</span></a>
                                        <a href="" class="btn btn-where-to-buy  mb10">Sẵn hàng tại 30 Lê Thúc Hoạch,TP.HCM.</a>
                                    </div>
                                    <div class="product-info mb20">
                                        <div class="product-info-row">
                                            <h3 class="pd-title">Thông tin sản phẩm</h3>
                                            <div class="bg-article expand" >
                                                <p> Mái Xếp - Nhôm Kính HOÀNG QUÝ - Chuyên thi công các công trình:
                                                </p>
                                                <p>✓ Mái xếp, Mái hiên, Mái che cho Cửa hàng ,sân vườn  giá rẻ tại Hồ Chí Minh</p>
                                                <p>✓ Nhôm kính Xingfa cho Nhà ở,công trình tiệm hàng với giá rẻ tại Hồ Chí Minh</p>
                                                <p>- Chuyên cung cấp và lắp ráp thi công các loại mái xếp di động, mái vòm, mái xếp, mái nhựa, mái rủ, mái bạt chất lượng cao giá thành hợp lý….  với chiều dày phát triển trên 10 năm qua, quý khách hoàn toàn yên tâm khi sử dụng dịch vụ của chúng tôi, Mái xếp Hoàng Quý chính là sự lựa chọn hoàn hảo tô điểm cho sự sang trọng và đẳng cấp cho ngôi nhà bạn hay cơ sở kinh doanh uy tín của quý vị</p>
                                                <p>- Chúng tôi đã và đang thi công lắp ráp rất nhiều sản phẩm về mái xếp  tại tất cả các tỉnh phía Nam với đội ngũ nhân viên kinh nghiệm lâu năm thi công chuyên nghiệp, luôn lắng nghe, tiếp thu ý kiến và cải thiện chất lượng sản phẩm mái xếp và cửa kính xingfa nhằm đem đến sự hài lòng cho mỗi khách hàng.</p>
                                                
                                            </div>
                                        </div>
                                        
                                        {/* <div class="product-info-row">
                                            <h3 class="pd-title">Kích thước / Trọng lượng</h3>
                                            <div class="bg-article expand" >
                                                <p>Kích thước: 58.1 × 53.8 × 14.1mm</p>
                                                <p>Tổng trọng lượng: 104g</p>
                                            </div>

                                        </div> */}
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <RelateProduct />
                </section>
            </main>
        )
    }
}