import FeaturePageUi from './FeaturePage';
import connect from '../../../../store';
import { findCategoryById } from '../../../utils/request';

export class FeaturePage {
    mapStateToProps = (state) => {
        return {
            category: state.homeReducer.category
        }
    }
    
    mapDispatchToProps = (dispatch) => {
        return {
            findCategoryById: (id) => dispatch(findCategoryById(id))
        }
    }
}

var p = new FeaturePage();

export default connect(p.mapStateToProps, p.mapDispatchToProps)(FeaturePageUi)