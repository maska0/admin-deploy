import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { a } from "../../services/axiosInstance";

function ProductsList() {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        async function fetchProducts(){
            try{
                const res = await a.get('/products');
                setProducts(res.data);
            } catch (error){
                console.error("Error: ", error);
            }
        }
        fetchProducts();
    }, []);
    return(         
                    <table class="table">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Товар</th>
                                <th>Категория</th>
                                <th>Цена</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) =>(
                                <ProductItem key={product.id} product={product}/>
                            ))}
                        </tbody>
                    </table>
                    );
}



export default ProductsList;