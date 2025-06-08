import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import Backbtn from "../../assets/image/back_btn.svg";
import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";


function EditProduct(){


    const {id} = useParams();

    const[name, setName] = useState('')
    const[image, setImage] = useState('')
    const[category, setCategory] = useState('')
    const[price, setPrice] = useState('')
    const[description, setDescription] = useState('')

    const navigate = useNavigate();



    useEffect(() =>{
        async function fetchProduct(){
            try {
                const res = await a.get(`/products/${id}`);
                const product =res.data;
                setName(product.name || '');
                setImage(product.image || '');
                setCategory(product.category || '');
                setPrice(product.price || undefined);
                setDescription(product.description || '');

            } catch(error) {
                console.error("Error: ", error);
            }
     }
        fetchProduct();
    }, [id]);


    async function handleSubmit(event){
        event.preventDefault(); 
        const updatedProduct = {
            name: name,
            image: image ,
            category: category ,
            price: Number(price),
            description: description,

        };
        try{
            const res = await a.patch(`/products/${id}`, updatedProduct);
            alert('Товар изменен!');
            navigate(PRODUCTS);
        } catch(error) {
                console.error("Error: ", error);
        }
    }



    return(
            <section class="block">
                <div class="container-back-btn">
                    <div class="container-btn-title">
                        <Link to={PRODUCTS} class="back-btn" onClick="history.back()">
                            <img src={Backbtn} alt="Назад" />
                        </Link>
                        <h1 class="title">Изменить товар</h1>
                    </div>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="form-control">
                            <label for="name">Название товара</label>
                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name" 
                                type="text" 
                                placeholder="Введите название товара" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="image">Фото</label>
                            <input 
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                id="image" 
                                type="url" 
                                placeholder="Вставьте URL фото" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="category">Категория</label>
                            <input 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                id="category" 
                                type="text" 
                                placeholder="Введите категорию товара" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="price">Цена</label>
                            <input 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                id="price" 
                                type="number" 
                                placeholder="Введите цену" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="description">Описание</label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id="description" 
                                placeholder="Введите описание" 
                                required 
                            ></textarea>
                        </div>
                        <div class="btn-dobavit">
                                <button class="btn bg-primary" type="submit">Изменить</button>
                        </div>
                    </form>

                    <div class="line2"></div>
                </div>
            </section>
    );
}


export default EditProduct;