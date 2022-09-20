import style from './cardBasket.module.css'
//import React, {useState} from 'react';
//import { useDispatch} from 'react-redux'
import { addProduct, removeProductBasket } from '../../../store/reducers/bascet'
import { v4 as uuidv4 } from 'uuid'

function CardBasket({img, name, price,id}) {

    // const dispatch = useDispatch()

    // let card = {
    //     id: uuidv4(),
    //     img: img,
    //     price: price
    // }
    // const handeleRemoveProductBasket = () => {
    //     dispatch(removeProductBasket(card))

    // }
    return (
        <div className= {style.cardBasket}>
            <div className={style.basketInfo}>
                <img className={style.basketInfoImg} src={img} alt=''/>
                <p className={style.basketInfoName}>{name}</p>
            </div>
            <div className={style.basketTotal}>
                <span className={style.basketTotalPrice}>{price}</span>
                <span className={style.basketTotalRuble}> ₽</span>
                <button /*onClick={handeleRemoveProductBasket}*/ className={style.basketTotalButton}>
                    <img src="images/end.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default CardBasket;