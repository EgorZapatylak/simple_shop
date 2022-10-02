import React, {useEffect, useState} from "react";
import axios from "axios";
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'
import arrow from './assets/img/arrowBack.svg'
import {useNavigate, useParams} from "react-router-dom";
import Reviews from "./Reviews";

export const Product = () => {
    const [isProductInCart, setIsProductIncart] = useState(false)
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }
    const params = useParams()
    const id = params.id;
    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${id}`)
            .then((res)=> setProduct(res.data))
    }, [])
    if (product === null) return <div>Loading...</div>

    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }
    return(
        <div>
            <div className="arrowBack">
                <button to={"/"} onClick={goBack}>
                    <img src={arrow} alt="" />
                    Back to Best Seller
                </button>
            </div>

            <div className="product">
                <img src={product.image} alt="" />
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="rating">
                        <p>Rating: {product.rating.rate}</p>
                        <img src={rating} alt="" />
                    </div>
                    <div className="category">
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>
                    <p className="description">{product.description}</p>
                    <button onClick={addProductToCartHandler}>
                        <img src={cartWhite} alt="" />
                        {isProductInCart ? 'Go to  cart' : 'Add to cart'}
                    </button>
                </div>
            </div>
            <Reviews />
        </div>
    )
}