import connect from '../../../../store';
import ProductPageUi from './ProductPageUi';
import { FeaturePage } from '../FeaturePage';

class ProductPage extends FeaturePage {
    
}

var p = new ProductPage();

export default connect(p.mapStateToProps, p.mapDispatchToProps)(ProductPageUi);