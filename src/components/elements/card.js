import './card.css';
function Card({url, title, description, info}) {
    return (
        <div className= 'card'>
            <img className='card-img' src={url} alt=''/>
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
            <div className='card-price price'>
                <p className='card-price__info'>{info}</p>
                <button className='card-price__button button02'>
                    <img className='button__img' src='images/addition.svg' alt=''/>
                </button>
            </div>
        </div>
    );
}

export default Card;
