import { Link, useParams } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import BackBtn from "../../assets/image/back_btn.svg";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";

function DetailOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await a.get(`/orders/${id}`);
                setOrder(res.data);
            } catch (error) {
                console.error("Error: ", error);
                setError("Не удалось загрузить данные заказа");
            } finally {
                setLoading(false);
            }
        }
        fetchOrder();
    }, [id]);

    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleString('ru-RU', options);
    };

    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };

    if (loading) return <div className="loading">Загрузка!!!!</div>;
    if (error) return <div className="error">{error}</div>;
    if (!order) return <div className="error">Заказ не найден!!!!!</div>;

    return (
        <section className="block">
            <div className="container-back-btn">
                <div className="container-btn-title">
                    <Link to={ORDERS} className="back-btn" onClick={(e) => {e.preventDefault(); window.history.back();}}>
                        <img src={BackBtn} alt="Назад" />
                    </Link>
                    <h1 className="title">Подробности заказа</h1>
                </div>
                
                <div className="order-name-container">
                    <div className="order-name-container-title">
                        <h2 className="order-name">Заказ от {order.customer.name } №{ order.id}</h2>
                    </div>
                </div>
                
                <div className="order-detail">
                    <p><strong>Телефон клиента: </strong>{order.customer.phone}</p>
                    <p><strong>Город: </strong>{order.customer.city}</p>
                    <p><strong>Адрес: </strong>{order.customer.address}</p>
                    
                    <div className="order-data">
                        <h2 className="title-data-list">Выбранные товары</h2>
                        <div className="order-data__list">
                            {order.items.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="order-item">
                                    <p>
                                        {item.name}, количество: {item.quantity}, 
                                        цена: {item.price} ₸, 
                                        итого: {item.quantity * item.price} ₸
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="itogo">
                    <h2 className="order-data_list">Итого: {calculateTotal(order.items)} ₸</h2>
                </div>
                
                <div className="line2"></div>
            </div>
        </section>
    );
}

export default DetailOrder;