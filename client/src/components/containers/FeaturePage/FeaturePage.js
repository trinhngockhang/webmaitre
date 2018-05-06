import React from 'react';
import { Header } from '../../common/header';
import { Footer } from '../../common/footer';

export default class FeaturePageUi extends React.Component {
    showHeader = () => Header();

    showContent = () => {
        return (
            <div>Hello chicken!!!</div>
        )
    }

    showFooter = () => Footer();

    render() {
        return (
            <div>
                {this.showHeader()}
                {this.showContent()}
                {this.showFooter()}
            </div>
        )
    }
}
