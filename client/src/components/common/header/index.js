import { connect } from 'react-redux';
import Header from './Header';
import { getCategory } from '../../../utils/request';


class HeaderController {
    mapStateToProps = (state) => {
        return {
            categorys: state.categoryReducer.categorys,
        }
    }

    mapDispatchToProps = (dispatch) => {
        return {
            getCategory: () => dispatch(getCategory()),
        }
    }
}

var p = new HeaderController();

export default connect(p.mapStateToProps, p.mapDispatchToProps)(Header);