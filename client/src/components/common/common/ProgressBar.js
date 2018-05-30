import React from 'react';
import { connect } from 'react-redux';
import { apiRequestStatus } from '../../../../../shared/config/api-config';

class ProgressBar extends React.Component {
    state = {
        showPuff: true,
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.status == apiRequestStatus.LOADING) {
            this.setState({ showPuff: true })
        }
        if(nextProps.status == apiRequestStatus.SUCCESS || nextProps.status == apiRequestStatus.ERROR) {
            setTimeout(() => {
                this.setState({ showPuff: false })
            }, 1000)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.showPuff !== this.state.showPuff) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.showPuff && 
                    <img src="/static/images/puff.svg" style={{ position: 'fixed', top: '50%', left: '50%', zIndex: '9999'}}/>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.productReducer.status,
    }
}

export default connect(mapStateToProps)(ProgressBar)