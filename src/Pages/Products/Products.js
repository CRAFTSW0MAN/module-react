import style from './Products.module.css';
import {menuList} from '../../menuList.js';
import Card from '../../components/elements/Products/card.js'; 
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
function Products() {
    const [basket, setbasket] = useState (0)
    const [sum, setSum] = useState (0)

    const addPricePlus = (price) => {
        setbasket (basket + 1)
        setSum (sum + +price)
    }
    // const addPriceMinus = (price) => {
    //     if( basket > 0){
    //         setbasket (basket - 1)
    //         setSum (sum - +price)

    //     }else {
    //         setbasket = 0
    //         setbasket = 0
    //     }
    // }


    return (
        <main className={style.main}>
            <div className={style.mainContainer}>
                <header className={style.containerHeader}>
                    <div className={style.headerBlock}>
                            <h1 className={style.headerTitleName}>НАША ПРОДУКЦИЯ</h1>
                        <div className={style.headerBasket}>
                            <div className={style.basket}>
                                <p className={style.basketAmount}>{basket} товара <br/>на сумму {sum} ₽</p>
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
                        const {id, img, name, description, price, weight, handelePlus, /*handeleMinus*/} = card;
                        return(
                            <Card
                                key={index}
                                id={id}
                                img={img}
                                name ={name}
                                description ={description}
                                price ={price}
                                weight ={weight}
                                handelePlus = {(e)=> addPricePlus(price)}
                                //handeleMinus = {(e)=> addPriceMinus(price)} // пока работает не правильно, если прибавляется несколько карточек,то сумма некорректно удаляется 
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default Products;