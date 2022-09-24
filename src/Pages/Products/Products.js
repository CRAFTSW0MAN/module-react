import style from './Products.module.css';
import {menuList} from '../../menuList.js';
import Card from '../../components/elements/Products/card.js';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { exit } from '../../store/reducers/form.js';


function Products() {
    const navigate =useNavigate ();
    const dispatch = useDispatch();

    const count = useSelector(state => state.basket.count);
    const pricesProducts = useSelector(state => state.basket.pricesProducts);

    const handeleExit = (e) => {
        dispatch(exit());
        navigate('/');
    };

    return (
        <main className={style.main}>
            <div className={style.mainContainer}>
                <header className={style.containerHeader}>
                    <div className={style.headerBlock}>
                            <h1 className={style.headerTitleName}>НАША ПРОДУКЦИЯ</h1>
                        <div className={style.headerBasket}>
                            <div className={style.basket}>
                                <p className={style.basketAmount}>{count} шт товара <br/>на сумму {pricesProducts} ₽</p>
                            </div>
                            <Link to="/basket">
                            <button className={style.headerButton}>
                                <img className={style.buttonImges} src='images/basket.svg' alt=''/>
                            </button>
                            </Link>
                                <button onClick={handeleExit} className={style.headerTitleButton}>Выйти</button>
                        </div>
                    </div>
                </header>

                <div className={style.containerMenu}>
                    {menuList.map((item, index) => {
                        const {id, idx, img, name, description, price, weight} = item;
                        return(
                            <Link to = {`/products/${id}`} key= {index}>
                            <Card
                                idx = {idx}
                                id={id}
                                img={img}
                                name ={name}
                                description ={description}
                                price ={price}
                                weight ={weight}
                            />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    )
};

export default Products;