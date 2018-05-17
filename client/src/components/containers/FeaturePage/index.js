import FeaturePageUi from './FeaturePage';
import connect from '../../../../store';
import { findProductByCategory } from '../../../utils/request';

export class FeaturePage {
    mapStateToProps = (state) => {
        return {
            categorys: state.categoryReducer.categorys,
        }
    }
    
    mapDispatchToProps = (dispatch) => {
        return {
            findProductByCategory: (id) => dispatch(findProductByCategory(id))
        }
    }
}

var p = new FeaturePage();

export default connect(p.mapStateToProps, p.mapDispatchToProps)(FeaturePageUi)