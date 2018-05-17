import FeaturePageUi from "../FeaturePage/FeaturePage";
import { SlideCarousel } from '../../common/content/SlideCarousel';
import { SlideProAll } from '../../common/content/SlideProAll';
import ProductOfCategory from "../../common/content/ProductOfCategory";
import { isEmptyOrUndefined } from "../../../../../shared/helper/check-data";

export default class HomePageUi extends FeaturePageUi {
    componentWillReceiveProps(nextProps) {
        if(nextProps.categorys !== this.props.categorys) {
            if(!isEmptyOrUndefined(nextProps.categorys)) {
                for(let i = 0; i < nextProps.categorys.length; i ++) {
                    this.props.findProductByCategory(nextProps.categorys[i]._id)
                }
            }
        }
    }

    showContent = () => {
        let categorys = this.props.categorys;
        return (
            <main className="content-main">
                { SlideCarousel() }
                {
                    categorys.map((s, idx) => {
                        return (
                            <ProductOfCategory parenId={s._id} idx={idx} nameCategory={s.name}/>
                        )
                    })
                }
                { SlideProAll() }
            </main>
        )
    }
}