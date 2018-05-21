import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header';
import { Footer } from '../../common/footer';
import { handleScript } from '../../../utils/handleScript';
import { libary } from "../../../../../static/js/libary";

export default class FeaturePageUi extends React.Component {
    componentDidMount() {
        handleScript("https://sp.zalo.me/plugins/sdk.js");
    }

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

    showZaloChatWidget = () => {
        return (
            <div>
                <div class="zalo-chat-widget" data-oaid="355047501913473592" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="350" data-height="420"></div>
                <script id="script"></script>
            </div>
        )
    }

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
                { this.showZaloChatWidget() }
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
