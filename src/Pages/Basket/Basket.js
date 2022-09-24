import style from './Basket.module.css';
import CardBasket from '../../components/elements/Basket/cardBasket.js';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { exit } from '../../store/reducers/form.js';
function Basket() {
    const navigate =useNavigate ();
    const dispatch = useDispatch();

    const basket = useSelector(state => state.basket.basket);

    const handeleExit = (e) => {
        dispatch(exit());
        navigate('/');
    }
    console.log(basket);
    const pricesProducts = useSelector(state => state.basket.pricesProducts);
    return (
        <main className={style.main}>
            <div className={style.mainContainer}>
                <div className={style.container}>
                    <header className={style.mainContainerHeader}>
                        <Link to='/products'>
                            <img className={style.headerButton} src="images/button-prosucts.svg" alt="" />
                        </Link>
                        <h1 className={style.headerTitle}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
                    </header>
                        <button onClick={handeleExit} className={style.headerTitleButton}>Выйти</button>
                </div>
                <div className={style.mainContainerChoice}>
                    {basket.map((item, index) => {
                        const {id, idx, img, name, price} = item
                        
                        return(
                            <Link to = {`/products/${id}`} key= {index}>
                            <CardBasket 
                                key={index}
                                idx ={idx}
                                id = {id}
                                img={img}
                                name = {name}
                                price ={price}
                            />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={style.mainBlock}>
                <div className={style.mainBlockBasket}>
                    <div className={style.basket}>
                        <span className={style.basketTitle}>Заказ на сумму: {pricesProducts}</span>

                        <span className={style.basketSum}> ₽</span>
                    </div>
                    <button className={style.basketBotton}>Оформить заказ</button>
                </div>
            </div>
        </main>
    )
}

export default Basket;
