import FeaturePageUi from "../FeaturePage/FeaturePage";
import { isEmptyOrUndefined } from "../../../../../shared/helper/check-data";
import { libary } from "../../../../../static/js/libary";
import { BreadCrumb } from "../../common/content/Product/BreadCrumb";
import ItemOwl from '../../common/content/Detail/ItemOwl';
import { handleScript } from '../../../utils/handleScript';

export default class DetailPageUi extends FeaturePageUi{
    static async getInitialProps ({ query: { id } }) {
        return { id }
    } 

    componentDidMount() {
        libary();
        handleScript("https://sp.zalo.me/plugins/sdk.js");
    }

    showContent = () => {
        return (
            <main class="content-main pt100">  
            { BreadCrumb() }
            <section class="main-detail">
                <div class="rowdetail">
                    <div class="container">
                        <div class="row">
                        <aside class="pd-left mb15"> 
                                <ItemOwl id={this.props.id}/>
                                <div class="pdl-collection all mt20 text-center">
                                    <div class="title-pdl"><span>Sản phẩm liên quan</span></div>
                                    <div class="pdl-collection">
                                        <ul class="row l">
                                            <li class=" col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div class="pro-item">
                                                    <figure class="reponsive-img"> 
                                                        <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                                    </figure> 
                                                </div>
                                            </li>
                                            <li class=" col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div class="pro-item">
                                                    <figure class="reponsive-img"> 
                                                        <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                                    </figure> 
                                                </div>
                                            </li>
                                            <li class=" col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div class="pro-item">
                                                    <figure class="reponsive-img"> 
                                                        <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                                    </figure> 
                                                </div>
                                            </li>
                                            <li class=" col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div class="pro-item">
                                                    <figure class="reponsive-img"> 
                                                        <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                                    </figure> 
                                                </div>
                                            </li>
                                            <li class=" col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div class="pro-item">
                                                    <figure class="reponsive-img"> 
                                                        <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                                    </figure> 
                                                </div>
                                            </li>
                                            <li class=" col-lg-4 col-md-6 col-sm-6 col-6">
                                                <div class="pro-item">
                                                    <figure class="reponsive-img"> 
                                                        <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                                    </figure> 
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            <aside class="pd-right mb15">
                                <a class="collection" href=""><img src="/static/images/uploads/g-shock.png" alt=""/></a>
                                <h1 class="pName"> GST-B100XA-1A</h1>
                                <div class="price">
                                    <span class="old-price">GNY: 3.960.000 đ</span>
                                    <span class="curr-price">3.960.000 đ</span>
                                    <span class="status ">Đã giảm giá 20 %</span>
                                </div>
                                <div class="button-buy clear">
                                    <a href="" class="btn btn-black mb10">Mua ngay</a>
                                    <a href="" title="" class="btn buy_now mb10"><b>Đặt hàng ngay - giao tận nơi  </b><span> Thanh toán tại nhà</span></a>
                                    <a href="" class="btn btn-where-to-buy  mb10">Sẵn hàng tại 46 Lê Thái Tổ.</a>
                                 </div>
                                <div class="product-info mb20">
                                    <div class="product-info-row">
                                        <h3 class="pd-title">Chi tiết sản phẩm</h3>
                                        <div class="bg-article expand" >
                                            <p>Bắt đầu với G-SHOCK là nhãn hiệu liên tục tạo nên những tiêu chuẩn mới về độ bền cho đồng hồ, giờ đây G-STEEL, một dòng đồng hồ với "cấu trúc bảo vệ theo lớp" mới.</p>
                                            <p>
                                            Sử dụng hai loại vật liệu khác nhau cho gờ tạo nên một cấu trúc hai lớp giúp bổ sung thêm khả năng chống va đập mới. Bốn mẫu đều sử dụng chất liệu thép không gỉ ở lớp trên và nhựa hấp thụ va đập ở lớp dưới. Khi lớp trên sử dụng chất liệu nhựa thì lớp dưới sẽ sử dụng nhựa tinh xảo để tạo lớp đệm chống lại các tác động va đập lên lớp </p>
                                            <p>Tính năng chuyển kim tạm thời dịch chuyển kim qua một bên khi nhấn nút để dễ đọc các nội dung hiển thị trên màn hình kỹ thuật số.</p>
                                            <p>>Dây đeo bằng uretan mềm giúp vừa khít xung quanh toàn bộ vỏ tạo thành các đường chạy mềm mại. Điều này cũng giúp giảm độ căn dây đeo và giúp vừa khít vào cổ tay mang lại cảm giác thoải mái. Kết quả là các chức năng hữu ích và có tính ứng dụng cao được gói gọn trong một kiểu dáng duy trì sự thoải mái ngay cả sau thời gian dài sử dụng.</p>
                                            <p>Từ chức năng cho tới thiết kế, mọi thứ về các mẫu GULFMASTER mới này hỗ trợ các hoạt động trên biển và trong môi trường khắc nghiệt.</p>
                                        </div> 
                                    </div>
                                    <div class="product-info-row">
                                        <h3 class="pd-title">Quà tặng đi kèm</h3>
                                        <div class="bg-article expand" >
                                            <p>Thẻ thay pin miễn phí trọn đời</p>
                                            <p>Bất cứ khi nào đồng hồ G-shock của bạn hết pin, hãy mang ngay đến Bello Lê Thái Tổ, 46 Lê Thái Tổ, HK HN để được thay pin miễn phí nha.s</p>
                                            <p>Hiện có sáu màu sắc rực rỡ cho bạn chọn lựa: Đen, trắng, đỏ, xanh dương, xanh lá, cam. Vòng tay cao su bề mặt nhám của Bello với logo G-shock dập chìm cực chất.</p>
                                        
                                        </div>  
                                    </div>  
                                    <div class="product-info-row">
                                        <h3 class="pd-title">Kích thước / Trọng lượng</h3>
                                        <div class="bg-article expand" >
                                            <p>Kích thước: 58.1 × 53.8 × 14.1mm</p>
                                            <p>Tổng trọng lượng: 104g</p> 
                                        </div> 
                                        
                                    </div>  
                                </div>
                            </aside>
                        </div>
                    </div>                    
                </div>
                <section class="related_product">
                    <div class="container"> 
                        <div class="tpg-txt text-center"><a href="">Phụ Kiện</a></div> 
                        <ul class="pro-list row pro-list-cate" >
                            <li class=" col-lg-3 col-md-6 col-sm-6 col-12" >
                                <div class="pro-item ">
                                    <div class="bg-item">
                                        <div class="namepro">G-STEEL Limited Edition</div>
                                        <div class="reponsive-img"> 
                                            <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                        </div> 
                                        <div class="price">4.202.100đ</div>
                                        <div class="cut-price">Giá đã giảm 10%</div>
                                    </div>
                                    <a href="" class="alink-all"></a>
                                </div>
                            </li>
                           <li class=" col-lg-3 col-md-6 col-sm-6 col-12" >
                                <div class="pro-item ">
                                    <div class="bg-item">
                                        <div class="namepro">G-STEEL Limited Edition</div>
                                        <div class="reponsive-img"> 
                                            <a href=""><img src=" /static/images/uploads/pro02.png" class="lazy" alt=""/></a>   
                                        </div>
                                        <div class="price">4.202.100đ</div>
                                        <div class="cut-price">Giá đã giảm 10%</div>
                                    </div>
                                    <a href="" class="alink-all"></a>
                                </div>
                            </li>
                           <li class=" col-lg-3 col-md-6 col-sm-6 col-12" >
                                <div class="pro-item ">
                                    <div class="bg-item">
                                        <div class="namepro">G-STEEL Limited Edition</div>
                                        <div class="reponsive-img"> 
                                            <a href=""><img src=" /static/images/uploads/pro03.png" class="lazy" alt=""/></a>   
                                        </div>
                                        <div class="price">4.202.100đ</div>
                                        <div class="cut-price">Giá đã giảm 10%</div>
                                    </div>
                                    <a href="" class="alink-all"></a>
                                </div>
                            </li>
                            <li class=" col-lg-3 col-md-6 col-sm-6 col-12" >
                                <div class="pro-item ">
                                    <div class="bg-item">
                                        <div class="namepro">G-STEEL Limited Edition</div>
                                        <div class="reponsive-img"> 
                                            <a href=""><img src=" /static/images/uploads/pro01.png" class="lazy" alt=""/></a>   
                                        </div>
                                        <div class="price">4.202.100đ</div>
                                        <div class="cut-price">Giá đã giảm 10%</div>
                                    </div>
                                    <a href="" class="alink-all"></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
        )
    }
}