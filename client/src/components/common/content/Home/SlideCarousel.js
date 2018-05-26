export const SlideCarousel = (props) => {
    return (
        <section id="slide" className="">   
            <div className="carousel slide" >   
                <div className="carousel-inner" id="akr_home"> 
                <div id="item0" className="item active" > 
                    <a href="" title=""> <div className="main-img-bg" style={{backgroundImage: "url('/static/images/uploads/bannertest4.jpg')"}}></div> </a> 
                    <div className="carousel-caption"> 
                        <div className="overlay-lower" >
                            <h4 className="ls-l-1" >Hoàng Quý</h4> 
                            <span>Chuyên thi công mái che - Nhôm kính XINGFA</span> 
                        </div>
                        <a href="/product" className="btn btn-default" tabindex="0">Tìm hiểu thêm sản phẩm</a>
                    </div> 
                </div>
                <div id="item1" className="item" >  
                    <a href="" title=""> <div className="main-img-bg" style={{backgroundImage: "url('/static/images/uploads/bannertest2.jpg')"}}></div> </a>  
                    <div className="carousel-caption">
                        <h2 className="ls-l-1">Giá cực tốt</h2> 
                        <div className="overlay-lower">
                            <b>Nhiều mẫu mã</b>
                        </div>
                        <a href="/product" className="btn btn-default" tabindex="0">Tìm hiểu thêm sản phẩm</a>
                    </div> 
                </div>
                </div>    
            </div> 
        </section>
    )
}