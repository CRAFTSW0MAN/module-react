import style from './card.module.css'
import React, {useState} from 'react';
import { useDispatch} from 'react-redux'
import { addProduct } from '../../../store/reducers/bascet'
import { v4 as uuidv4 } from 'uuid'


function Card({img, name, description, price,weight,id}) {

    const dispatch = useDispatch()

    let item = {
        id: uuidv4(),
        name: name,
        img: img,
        price: price
    }
    const handeleAddProdeuct = () => {
        dispatch(addProduct(item))

    }

    const [Count, setCount] = useState (0)
    // const handelePlus = () => {
    //     setCount (Count + 1)
    // }
    // const handeleMinus = () => {
    //     if (Count > 0) {
    //         setCount (Count - 1)
    //     } else {
    //         Count = 0
    //     }
    // }

    return (
        <div className={style.card}>
            <img className={style.cardImg} src={img} alt=''/>
            <h2 className={style.cardName}>{name}</h2>
            <p className={style.cardDescription}>{description}</p>
            <div className={style.cardPrice}>
                <div className={style.cardPriceInfo}>
                    <span className={style.infoPrice}>{price}</span>
                    <span className={style.infoPrice}> ₽/ </span>
                    <span className={style.infoWeight}>{weight}</span>
                </div>
                <div className={style.count}>
                    <button /*onClick={handeleMinus}*/ className={style.button}>-</button>
                    <div className={style.countButton}>{Count}</div>
                    <button onClick={handeleAddProdeuct} className={style.button}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
