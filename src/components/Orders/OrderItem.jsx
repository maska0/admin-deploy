import { ORDER_DELETE, ORDER_DETAIL } from "../../utils/consts";
import { Link } from "react-router-dom";
import eye from "../../assets/image/eye.svg";
import trash from "../../assets/image/trash-fill 1.svg";

function OrderItem({ order }) {
    function formatDateTime(isoString) {
        if (!isoString) return '';
        const options = {
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit'
        };
        return new Date(isoString).toLocaleString('kk-KZ', options);
    }

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.customer.name}</td>
            <td>{order.customer.phone}</td>
            <td>{formatDateTime(order.orderTimestamp)}</td>
            <td colSpan="3" className="actions-category" style={{border: "none"}}>
                <Link to={`/orders/${order.id}`} className="btn bg-danger">
                    <img src={eye} alt="Смотреть" className="table-element" />
                </Link>
                <Link to={`/orders/delete/${order.id}`} className="btn bg-danger">
                    <img src={trash} alt="Удалить" className="table-element" />
                </Link>
            </td>
        </tr>
    );
}

export default OrderItem;