import connect from '../../../../store';
import HomePageUi from './HomePageUi';
import { FeaturePage } from '../FeaturePage';

class HomePage extends FeaturePage {
    
}

var p = new HomePage();

export default connect(p.mapStateToProps, p.mapDispatchToProps)(HomePageUi);