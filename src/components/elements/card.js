import './card.css';
function Card({img, name, description, price,weight}) {
    return (
        <div className= 'card'>
            <img className='card-img' src={img} alt=''/>
            <h2 className='card-name'>{name}</h2>
            <p className='card-description'>{description}</p>
            <div className='card-price price'>
                <div className='card-price__info info'>
                    <span className='info-price'>{price}</span>
                    <span> ₽/ </span>
                    <span className='info-weight'>{weight}</span>
                </div>
                <button className='card-price__button button02'>
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
