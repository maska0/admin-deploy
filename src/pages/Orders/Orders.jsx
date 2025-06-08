import { Link } from "react-router-dom";
import OrderList from "../../components/Orders/OrderList";
import BackBtn from "../../assets/image/back_btn.svg";
import { DASHBOARD } from "../../utils/consts";

function Orders() {
    return (
        <section className="block">
            <div className="container-dobavit">
                <div className="container-btn-title">
                    <Link to={DASHBOARD} className="back-btn" onClick={(e) => {
                        e.preventDefault();
                        window.history.back();
                    }}>
                        <img src={BackBtn} alt="Назад" />
                    </Link>
                    <h1 className="title">Заказы</h1>
                </div>
                <OrderList/>
            </div>
            <div className="line2"></div>   
        </section>
    );
}

export default Orders;