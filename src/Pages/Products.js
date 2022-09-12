import './Products.css';
import Card from '../components/elements/card.js'; // возможно не верный путь проверить,если сломается!!
import {menuList} from '../menuList.js'; // возможно не верный путь проверить,если сломается!!
function Products() {
    return (
        <main className='main'>
            <div className='main-container container'>
                <header className='container-header'>
                    <div className='header-block'>
                        <h1 className='header__title'>наша продукция</h1>
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
                {menuList.map(key => {
                    return(
                    <Card 
                        img={key.img}
                        name ={key.name}
                        description = {key.description}
                        price ={key.price}
                        weight ={key.weight}
                    />
                    )
                })}
            </div>
        </div>
    </main>
    );
}

export default Products;