import { ORDERS } from "../../utils/consts";
import { Link, useNavigate } from "react-router-dom";
import { a } from "../../services/axiosInstance";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DeleteOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState({});

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await a.get(`/orders/${id}`);
        setOrder(res.data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    }
    fetchOrder();
  }, [id]);

    async function handleDelete(e) {
    e.preventDefault()
    const orderId = Number(id) // Нахуй строки, только числа!
    console.log('Пытаюсь удалить заказ ID:', orderId)

    try {
        const response = await a.delete(`/orders/${orderId}`)
        console.log('Ответ сервера:', response)
        
        if (response.status === 200 || response.status === 204) {
        alert('Заказ удалён!')
        navigate(ORDERS)
        } else {
        alert('Сервер вернул какой-то пиздец: ' + response.status)
        }
    } catch (error) {
        console.error('Полная ошибка:', error)
        alert('Ошибка удаления: ' + (error.response?.data?.message || 'Сервер сдох'))
    }
    }

  return (
    <section className="block">
      <div className="container">
        <h1 className="title">Удалить заказ?</h1>
        <p className="mb-5">
          Вы уверены, что хотите удалить заказ {order.id}? Клиент останется без цветов.
        </p>
        <form className="actions-sm" onSubmit={handleDelete}>
          <button type="submit" className="btn-roz">
            Съесть самому
          </button>
          <Link to={ORDERS} className="btn bg-primary">
            Пощадить
          </Link>
        </form>
      </div>
      <div className="line2"></div>
    </section>
  );
}

export default DeleteOrder;