import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shouldUpdate } from 'utils/shallowRender';

function mapStateToProps(state) {
    return {
        categorys: state.categoryReducer.categorys,
    };
}

class FilterMenu extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(shouldUpdate(nextProps.categorys, this.props.categorys)) {
            return true;
        }
        return false;
    }

    render() {
        let categorys = this.props.categorys;
        return (
            <div className="controls "> 
                <ul className="portfolio-tabs l">
                    {/* <li className="filter" data-filter="all"><span></span></li> */}
                    {
                        categorys.map((s, i) => {
                            return (
                                <li className="filter" data-filter={"category_" + s._id} key={i}> <span>{s.name}</span></li>
                            )
                        })
                    }         
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(FilterMenu);