import { Link, useNavigate } from "react-router-dom";
import {PRODUCTS } from "../../utils/consts";
import BackBtn from "../../assets/image/back_btn.svg";
import { useState } from "react";
import { a } from "../../services/axiosInstance";

function CreateProduct() {


    const[name, setName] = useState('')
    const[image, setImage] = useState('')
    const[category, setCategory] = useState('')
    const[price, setPrice] = useState('')
    const[description, setDescription] = useState('')

    const navigate = useNavigate();


    async function handleSubmit(event) {
        event.preventDefault();

        const newProduct = {
            name: name,
            image: image ,
            category: category ,
            price: Number(price),
            description: description,


        }
        try{
            const res = await a.post('/products', newProduct)
            alert("Товар добавлен!")
            setName(name)
            setImage(image)
            setCategory(category)
            setPrice(price)
            setDescription(description)
            navigate(PRODUCTS)

        } catch (error){
            console.error("Ошибка при добавлении товара:", error);
            alert("Не удалось добавить товар: " + (error.response?.data?.message || error.message));
        }
    }


    return (
            <section class="block">
                <div class="container-back-btn">
                    <div class="container-btn-title">
                        <Link to={PRODUCTS} class="back-btn" onClick="history.back()">
                            <img src={BackBtn} alt="Назад" />
                        </Link>
                        <h1 class="title">Добавить товар</h1>
                    </div>


                    <form class="form" onSubmit={handleSubmit}>
                        <div class="form-control">
                            <label htmlFor="name">Название товара</label>
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
                            <label htmlFor="image">Фото</label>
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
                            <label htmlFor="category">Категория</label>
                            <input 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                id="category" 
                                type="text" 
                                placeholder="Введите категорию" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label htmlFor="price">Цена</label>
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
                            <label htmlFor="description">Описание</label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id="description" 
                                placeholder="Введите описание" 
                                required 
                            ></textarea>
                        </div>

                    <div class="btn-dobavit">
                            <button class="btn bg-primary" type="submit">Добавить</button>
                    </div>
                    </form>
                    <div class="line2"></div>
                </div>
            </section>
    );

}

export default CreateProduct;