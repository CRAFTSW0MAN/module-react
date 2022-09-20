import style from './Prosuct.module.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Product() {
const navigation =useNavigate ()
const back = () => navigation(-1)

    return (
        <main className={style.main}>
        <div className={style.mainContainer}>
            <header className={style.containerHeader}>
                <div className={style.headerBlock}>
                    <Link to= {back}>
                        <img className={style.headerButton} src="images/button-prosucts.svg" alt="" />
                    </Link>
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
        </div>
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    
                </div>
            </div>
        </div>
        </main>
    );
}

export default Product;