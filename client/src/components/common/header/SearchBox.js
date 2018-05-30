import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps() {
    return {

    };
}


class SearchBox extends Component {
    searchItem = () => {
        let searchKeyWord = this.searchInput.value;
        console.log(searchKeyWord);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return fasle;
    }

    render() {
        return (
            <div className="dropdown-menu dropdown-search">
                <div className="input-group ">
                    <input type="text" className="search-submit-form btn" placeholder="Search" ref={ref => this.searchInput = ref }/>
                    <span className="search-submit-button">
                        <button className="" type="button" onClick={() => this.searchItem()}><i className="fa fa-search"></i></button>
                    </span>
                </div> 
            </div>
        );
    }
}

export default connect(
    null, mapDispatchToProps
)(SearchBox);