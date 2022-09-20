import style from './Basket.module.css';
//import {menuList} from '../../menuList.js';
import CardBasket from '../../components/elements/Basket/cardBasket.js';
import { Link } from 'react-router-dom' 
import { useSelector } from 'react-redux'
function Basket() {
    const backet = useSelector(state => state.basket.backet)
    console.log(backet);
    const pricesProducts = useSelector(state => state.basket.pricesProducts)
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
                    <Link to = "/" >
                        <button className={style.headerTitleButton}>Выйти</button>
                    </Link>
                </div>
                <div className={style.mainContainerChoice}>
                    {backet.map((item, index) => {
                        const {img, name, price, id} = item
                        return(
                            <CardBasket 
                                key={index}
                                img={img}
                                name = {name}
                                price ={price}
                            />
                        )
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
    );
}

export default Basket;
