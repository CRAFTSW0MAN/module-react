import style from './cardBasket.module.css';
import { useDispatch} from 'react-redux';
import { removeProductBasket } from '../../../store/reducers/basket';

function CardBasket({img, name, price,id, idx, info }) {

    const dispatch = useDispatch();

    // в начале отрабатывала кнопочка удаления , а при нажатии на саму карточку уже перекидывало на индивидуальную карточку 
    const handeleRemoveProductBasket = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(removeProductBasket(idx));
    };
    return (
        <div className= {style.cardBasket}>
            <div className={style.basketInfo}>
                <img className={style.basketInfoImg} src={img} alt=''/>
                <p className={style.basketInfoName}>{name}</p>
            </div>
            <div className={style.basketTotal}>
                <span className={style.basketTotalPrice}>{price}</span>
                <span className={style.basketTotalRuble}> ₽</span>
                <button onClick={handeleRemoveProductBasket} className={style.basketTotalButton}>
                    <img src="images/end.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default CardBasket;