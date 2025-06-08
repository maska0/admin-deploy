import { useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";
import { Link } from "react-router-dom";


function DeleteProduct() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [product , setProduct] = useState({});

    useEffect(() =>{
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


    async function handleDelete() {
        try {   
            await a.delete(`/products/${id}`);
            alert("Товар удален!");
            navigate(PRODUCTS);
        } catch (error){
            console.error("Error: ", error);
        }
    }


    return(
            <section class="block">
                <div class="container">
                    <h1 class="title">Удалить товар?</h1>
                    <p class="mb-5">
                        Вы уверены, что хотите удалить товар? {product.name} <br />
                        Действие необратимо.
                    </p>
                    <form class="actions-sm" onSubmit={handleDelete}>
                        <Link to={PRODUCTS} class="btn bg-primary">
                            Назад
                        </Link>
                        <button   type="submit" class="btn-roz">
                            Удалить
                        </button>
                    </form>
                    
                </div>
                <div class="line2"></div>
            </section>
    );
}


export default DeleteProduct;