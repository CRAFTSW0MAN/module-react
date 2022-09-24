import style from './card.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { addProduct} from '../../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';


function Card({img, name, description, price,weight,id,info}) {
    // 
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);
    //для добавления счетчика в саму карточку 
    const count = basket.filter(item => item.id === id).length;
    

    let item = {
        idx: uuidv4(),
        id: id,
        name: name,
        img: img,
        price: price
    };
    // в начале отрабатывала кнопочка добавления , а при нажатии на саму карточку уже перекидывало на индивидуальную карточку 
    const handeleAddProdeuct = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addProduct(item));

    };


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
                        <div className={style.countButton}> В корзине {count} шт</div> 
                        <button onClick={handeleAddProdeuct} className={style.button}>+</button>
                    </div>
                </div>
            </div>
    );
};

export default Card;
