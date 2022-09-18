import style from './Basket.module.css';
import {menuList} from '../../menuList.js';
import CardBasket from '../../components/elements/Basket/cardBasket.js';
import { Link } from 'react-router-dom' 
function Basket() {
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
                    {menuList.map((item, index) => {
                        return(
                            <CardBasket 
                                key={index}
                                img={item.img}
                                name ={item.name}
                                price ={item.price}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={style.mainBlock}>
                <div className={style.mainBlockBasket}>
                    <div className={style.basket}>
                        <span className={style.basketTitle}>Заказ на сумму: </span>

                        <span className={style.basketSum}>6 220 ₽</span>
                    </div>
                    <button className={style.basketBotton}>Оформить заказ</button>
                </div>
            </div>
        </main>
    );
}

export default Basket;
