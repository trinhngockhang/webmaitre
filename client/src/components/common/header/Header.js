import React, { Component } from 'react';
import SearchBox from "./SearchBox";
import { Loadfile } from './Loadfile';

class Header extends Component {

    componentDidMount() {
        this.props.getCategory();
    }

    render() {
        let categorys = this.props.categorys;
      
        return (
            <div>
                {
                    Loadfile()
                }
                <header id="header" className="">
                    <section className="header-middle">
                        <div className="container">
                            <div className="logo"> 
                                <h1 className="texth1">Thiết kế websiter chuyên nghiệp</h1>
                                <a href="index.html" title=""><img src="/static/images/logo.png" className="" alt=""/></a>  
                            </div> 
                            <div className="nav-btn-show sidebar-toggle hidden-xl hidden-lg fr" state="hide"><i className="fa fa-bars" aria-hidden="true"></i></div>
                            <div className="header-search">
                                <a className="header-parent-search" data-toggle="dropdown" role="button" aria-expanded="true" href="">
                                    <i className="fa fa-search"></i>
                                </a>
                            <SearchBox/>
                            </div> 
                            <div className="nav-desktop">
                                <ul className="navmenu">
                                    {/* <li className="m-relative"> 
                                        <a className="a-open-down" href=""></a>
                                        <a href="">Đồng hồ</a> 
                                        <ul className="sub-menu">
                                            <li><a href="" title="">G-shock Brand</a> </li>
                                            <li><a href="" title="">OCEANUS Brand</a> </li>
                                            <li><a href="" title="">Edifice Brand</a> </li>
                                            <li><a href="" title="">Pro Trek Brand</a> </li>
                                            <li><a href="" title="">Baby G Brand</a> </li>
                                            <li><a href="" title="">SHEEN Brand</a> </li>
                                        </ul>
                                    </li> */}
                                    {
                                        categorys.map((s, idx) => {
                                            return (
                                                <li key={idx}> <a href="">{s.name}</a> </li> 
                                            )
                                        })
                                    }
                                </ul> 
                            </div>
                        </div>
                    </section> 
                </header>
            </div>
        )
    }
}

export default Header;