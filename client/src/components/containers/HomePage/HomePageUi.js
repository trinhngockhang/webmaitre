import FeaturePageUi from "../FeaturePage/FeaturePage";
import { SlideCarousel } from '../../common/content/SlideCarousel';
import { SlideProAll } from '../../common/content/SlideProAll';
import ProductOfCategory from "../../common/content/ProductOfCategory";
import { isEmptyOrUndefined } from "../../../../../shared/helper/check-data";
import { libary } from "../../../../../static/js/library";

export default class HomePageUi extends FeaturePageUi {
    state = {
        isLoading: false
    }

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
                        let length = isEmptyOrUndefined(categorys) ? 0 : categorys.length;
                        return (
                            <ProductOfCategory libary={libary} parenId={s._id} parentLength={length} idx={idx} nameCategory={s.name}/>
                        )
                    })
                }
                { SlideProAll() }
            </main>
        )
    }
}