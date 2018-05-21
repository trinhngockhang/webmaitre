import connect from '../../../../store';
import DetailPageUi from './DetailPageUi';
import { FeaturePage } from '../FeaturePage';

class DetailPage extends FeaturePage {
    
}

var p = new DetailPage();

export default connect(p.mapStateToProps, p.mapDispatchToProps)(DetailPageUi);