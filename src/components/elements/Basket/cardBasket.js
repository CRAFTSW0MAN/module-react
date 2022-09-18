import style from './cardBasket.module.css'
function CardBasket({img, name, price}) {
    return (
        <div className= {style.cardBasket}>
            <div className={style.basketInfo}>
                <img className={style.basketInfoImg} src={img} alt=''/>
                <p className={style.basketInfoName}>{name}</p>
            </div>
            <div className={style.basketTotal}>
                <span className={style.basketTotalPrice}>{price}</span>
                <span className={style.basketTotalRuble}> ₽</span>
                <button className={style.basketTotalButton}>
                    <img src="images/end.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default CardBasket;