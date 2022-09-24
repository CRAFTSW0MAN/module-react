import style from './Prosuct.module.css'
import { useParams, Link , useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { addProduct } from '../../store/reducers/basket.js'
import { v4 as uuidv4 } from 'uuid'
import {menuList} from '../../menuList.js'

function Product() {
    //  Передает данные с карточки сюда чтобы по Id все открывалось
    const {id} = useParams();
    const {name, img, price, description, weight,info} = menuList.find(item => item.id === id)
   
    // Навигация для возввращения на 1 станицу назад  
    const navigate =useNavigate ()
    const goBack = () => navigate(-1)

    // привязка к action
    const count = useSelector(state => state.basket.count)
    const pricesProducts = useSelector(state => state.basket.pricesProducts)
    const dispatch = useDispatch()
    let item = {
        idx: uuidv4(),
        id: id,
        name: name,
        img: img,
        price: price,
        info: info,
    }
    const handeleAddProdeuct = (e) => {
        dispatch(addProduct(item));
    }

    return (
        <main className={style.main}>
            <div className={style.mainContainer}>
                <header className={style.containerHeader}>
                    <div className={style.headerBlock}>
                            <button onClick={goBack} className={style.headerButton}>
                                <img className={style.headerButtonButton} src='/images/button-prosucts.svg' alt="" />
                            </button>
                        <div className={style.headerBasket}>
                            <div className={style.basket}>
                                <p className={style.basketAmount}>{count} товара <br/>на сумму {pricesProducts} ₽</p>
                            </div>
                            <Link to="/basket">
                            <button className={style.headerButton2}>
                                <img className={style.buttonImges} src='/images/basket.svg'alt=''/>
                            </button>
                            </Link>
                            <Link to = "/" >                                
                                <button className={style.headerTitleButton}>Выйти</button>
                            </Link>
                        </div>
                    </div>
                </header>
                <div className={style.mainBlock}>
                    <div className={style.blockCard}>
                        <img className={style.cardImg} src={img} alt="" />
                        <div className={style.cardDescription}>
                            <div className={style.descriptionName}>{name}</div>
                            <div className={style.descriptionInfo}>{info}</div>
                            <div className={style.descriptionSpecification}>
                                <div className={style.specification}>
                                    <div className={style.specificationPrice}>{price} ₽ / </div>
                                    <div className={style.specificationWeight}> {weight}</div>
                                </div>
                                <button onClick={handeleAddProdeuct} className={style.specificationButton}>В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;