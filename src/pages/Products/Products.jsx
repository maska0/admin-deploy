import ProductList from "../../components/Products/ProductList";
import { DASHBOARD, PRODUCT_CREATE } from "../../utils/consts";
import { Link } from "react-router-dom";
import BackBtn from "../../assets/image/back_btn.svg";
import circleBtn from "../../assets/image/dobavit.svg";

function Products (){
    return (
            <section class="block">
                <div class="container-dobavit">
                    <div class="container-btn-title">
                        <Link to={DASHBOARD} class="back-btn" onClick="history.back()">
                            <img src={BackBtn} alt="Назад" />
                        </Link>
                        <h1 class="title">Товары</h1>
                    </div>
                    <ProductList />
                </div> 
                <div class="line2"></div>
                <Link to={PRODUCT_CREATE} class="add-circle-btn" title="Добавить">
                    <img src={circleBtn} alt="Плюс" class="add-circle-icon" />
                </Link>
            </section>
    );
}

export default Products;