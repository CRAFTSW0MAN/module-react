import './Products.css';
import {menuList} from '../../menuList.js';
import Card from '../../components/elements/Products/card.js'; 
function Products() {
    return (
        <main className='main'>
            <div className='main-container container'>
                <header className='container-header'>
                    <div className='header-block'>
                        <div className='header-title'>
                            <button className='header-title__button'>
                                <img src="images/button-prosucts.svg" alt="" />
                            </button>
                            <h1 className='header-title__title'>НАША ПРОДУКЦИЯ</h1>
                        </div>
                        <div className='header-basket'>
                            <div className='basket'>
                                <p className='basket-amount'>3 товара <br/>на сумму 3 500 ₽</p>
                            </div>
                            <button className='header__button button'>
                                <img className='button__imges' src='images/basket.svg' alt=''/>
                            </button>
                        </div>
                    </div>
                </header>

                <div className='container-menu'>
                    {menuList.map(product02 => {
                        return(
                            <Card 
                                img={product02.img}
                                name ={product02.name}
                                description ={product02.description}
                                price ={product02.price}
                                weight ={product02.weight}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default Products;