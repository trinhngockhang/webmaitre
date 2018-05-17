export const SlideCarousel = (props) => {
    return (
        <section id="slide" className="">   
            <div className="carousel slide" >   
                <div className="carousel-inner" id="akr_home"> 
                <div id="item0" className="item active" > 
                    <a href="" title=""> <div className="main-img-bg" style={{backgroundImage: "url('/static/images/uploads/banner1.jpg')"}}></div> </a> 
                    <div className="carousel-caption"> 
                        <div className="overlay-lower">
                            <span>Tough Chronograph with Smartphone link</span>
                            <b>G-STEEL</b>
                            <h2 className="ls-l-1">GST-B100 Series</h2> 
                        </div>
                        <a href="" className="btn btn-default" tabindex="0">Learn More</a>
                    </div> 
                </div>
                <div id="item1" className="item" >  
                    <a href="" title=""> <div className="main-img-bg" style={{backgroundImage: "url('/static/images/uploads/banner2.jpg')"}}></div> </a>  
                    <div className="carousel-caption">
                        <h2 className="ls-l-1">REFINED</h2> 
                        <div className="overlay-lower">
                            <span>Featuring</span>
                            <b>MRGG2000HT-1A</b>
                        </div>
                        <a href="" className="btn btn-default" tabindex="0">Learn More</a>
                    </div> 
                </div>
                </div>    
            </div> 
        </section>
    )
}