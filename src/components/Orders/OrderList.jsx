import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { a } from "../../services/axiosInstance";

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const res = await a.get('/orders');
                setOrders(res.data);
            } catch(error) {
                console.error("Error: ", error);
            }
        }
        fetchOrders();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Имя заказчика</th>
                    <th>Телефон</th>
                    <th>Время</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </tbody>
        </table>
    );
}

export default OrderList;