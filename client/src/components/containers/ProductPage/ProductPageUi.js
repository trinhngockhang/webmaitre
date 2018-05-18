import FeaturePageUi from "../FeaturePage/FeaturePage";
import { BreadCrumb } from "../../common/content/Product/BreadCrumb";
import { libary } from "../../../../../static/js/library";
import { ContentUnit } from "../../common/content/Product/ContentUnit";
import FilterMenu from "../../common/content/Product/FilterMenu";
import CateList from "../../common/content/Product/CateList";
import { isEmptyOrUndefined } from "../../../../../shared/helper/check-data";

export default class ProductPageUi extends FeaturePageUi {
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
        return (
            <main className="content-main pt100">  
                { BreadCrumb() }
                <section className="main-cate">
                    <div className="container">
                        <FilterMenu/>
                        <CateList libary={libary}/>
                        { ContentUnit() }
                    </div>
                </section>
            </main>
        )
    }
}