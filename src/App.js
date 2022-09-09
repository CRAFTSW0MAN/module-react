import './App.css';
import Card from './components/elements/card.js';
function App() {
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
          <Card 
            url={'images/1.png'}
            title = {'Устрицы по рокфеллеровски'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
            info = {'2 700 ₽/ 500 г.'}
          />
          <Card 
            url={'images/2.png'}
            title = {'Свиные ребрышки на гриле с зеленью'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
            info = {'1 600 ₽/ 750 г.'}
          />
          <Card 
            url={'images/3.png'}
            title = {'Креветки по-королевски в лимонном соке'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
            info = {'1 820 ₽/ 7 шт.'}
          />
          <Card 
            url={'images/4.png'}
            title = {'Устрицы по рокфеллеровски'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
            info = {'2 700 ₽/ 500 г.'}
          />
          <Card 
            url={'images/1.png'}
            title = {'Устрицы по рокфеллеровски'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
            info = {'2 700 ₽/ 500 г.'}
          />
          <Card 
            url={'images/2.png'}
            title = {'Свиные ребрышки на гриле с зеленью'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
            info = {'1 600 ₽/ 750 г.'}
          />
          <Card 
            url={'images/3.png'}
            title = {'Креветки по-королевски в лимонном соке'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
            info = {'1 820 ₽/ 7 шт.'}
          />
          <Card 
            url={'images/4.png'}
            title = {'Устрицы по рокфеллеровски'}
            description = {'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
            info = {'2 700 ₽/ 500 г.'}
          />
        </div>
      </div>
    </main>
    
  );
}

export default App;
