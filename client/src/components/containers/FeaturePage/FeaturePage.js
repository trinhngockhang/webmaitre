import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header';
import { Footer } from '../../common/footer';

export default class FeaturePageUi extends React.Component {
    

    showHeader = () => <Header/>;
    showFooter = () => Footer();
    showContent = () => {
        return (
            <div>Hello chicken!!</div>
        )
    }

    showScript = () => {
        return (
            <div>
              <div className="back-to-top"> <a href="javascript:;"> <span className="fa fa-angle-up fa-2x"></span></a></div>     
                <script type="text/javascript" src="/static/js/jquery.min.js"></script>    
                <script src="/static/js/html5shiv.min.js"></script>
                <script src="/static/js/respond.min.js"></script>
                <script type="text/javascript" src="/static/js/bootstrap.min.js"></script>       
                <script type="text/javascript" src="/static/js/plugins.js"></script>   

            </div>
        )
    }

    handleScipt = () => {}

    renderPage = () => {
        return (
            <div>
                <div className="sidebar-overlay"></div>
                <aside id="sidebar" className="sidebar sidebar-fixed-left" role="navigation"> 
                    <div className="header-sidebar">
                        <span>Danh Mục menu</span>
                    </div>
                    <div className="nav-mobie"> </div> 
                </aside>
                <div className="Wrapper">
                    {this.showHeader()}   
                    {this.showContent()}   
                    {this.showFooter()}
                </div>
                {this.showScript()}
                {this.handleScipt()}
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.renderPage()}
            </div>
        )
    }
}
