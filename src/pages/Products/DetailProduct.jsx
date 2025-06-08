import { PRODUCTS } from "../../utils/consts";
import BackBtn from "../../assets/image/back_btn.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";

function DetailProduct() {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try{
                const res = await a.get(`/products/${id}`);
                setProduct(res.data);
            } catch (error){
                console.error("Error: ", error);
            }
        }
        fetchProduct();
    } , [id]);




    return(
        
            <section class="block">
                <div class="container">
                    <div class="container-btn-title">
                        <Link to={PRODUCTS} class="back-btn" onClick="history.back()">
                            <img src={BackBtn} alt="Назад" />
                        </Link>
                        <h1 class="title">Подробности товара</h1>
                    </div>
                    <div class="product-detail">
                        {/* добавить импорт товара */}
                        <img src={product.image} alt={product.name} class="product-img" />
                        <div class="product-detail__content">
                            <h2 class="product-detail__title">{product.name}</h2>
                            <p>Категория: <span class="category-badge">{product.category}</span></p>
                            <p>Цена: {product.price}</p>
                        </div>
                    </div>
                    <div class="description">
                        <p>Описание: {product.description}</p>
                    </div>
                </div>
                <div class="line2"></div>
            </section>
    );
}

export default DetailProduct;
