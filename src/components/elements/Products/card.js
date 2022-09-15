import style from './card.module.css'
function Card({img, name, description, price,weight}) {
    return (
        <div className={style.card}>
            <img className={style.cardImg} src={img} alt=''/>
            <h2 className={style.cardName}>{name}</h2>
            <p className={style.cardDescription}>{description}</p>
            <div className={style.cardPrice}>
                <div className={style.cardPriceInfo}>
                    <span className={style.infoPrice}>{price}</span>
                    <span className={style.infoPrice}> ₽/ </span>
                    <span className={style.infoWeight}>{weight}</span>
                </div>
                <button className={style.button}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="14.5" stroke="white"/>
                    <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Card;
