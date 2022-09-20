import style from './Products.module.css';
import {menuList} from '../../menuList.js';
import Card from '../../components/elements/Products/card.js'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import React, {useState} from 'react';


function Products() {
    const count = useSelector(state => state.basket.count)
    const pricesProducts = useSelector(state => state.basket.pricesProducts)
    
    // const [basket, setbasket] = useState (0)
    // const [sum, setSum] = useState (0)

    // const addPricePlus = (price) => {
    //     setbasket (basket + 1)
    //     setSum (sum + +price)
    // }
    // // const addPriceMinus = (price) => {
    // //     if( basket > 0){
    // //         setbasket (basket - 1)
    // //         setSum (sum - +price)

    // //     }else {
    // //         setbasket = 0
    // //         setbasket = 0
    // //     }
    // // }


    return (
        <main className={style.main}>
            <div className={style.mainContainer}>
                <header className={style.containerHeader}>
                    <div className={style.headerBlock}>
                            <h1 className={style.headerTitleName}>НАША ПРОДУКЦИЯ</h1>
                        <div className={style.headerBasket}>
                            <div className={style.basket}>
                                <p className={style.basketAmount}>{count} товара <br/>на сумму {pricesProducts} ₽</p>
                            </div>
                            <Link to="/basket">
                            <button className={style.headerButton}>
                                <img className={style.buttonImges} src='images/basket.svg' alt=''/>
                            </button>
                            </Link>
                            <Link to = "/" >
                                <button className={style.headerTitleButton}>Выйти</button>
                            </Link>
                        </div>
                    </div>
                </header>

                <div className={style.containerMenu}>
                    {menuList.map((card, index) => {
                        const {id, img, name, description, price, weight} = card;
                        return(
                            <Card
                                key={index}
                                id={id}
                                img={img}
                                name ={name}
                                description ={description}
                                price ={price}
                                weight ={weight}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default Products;