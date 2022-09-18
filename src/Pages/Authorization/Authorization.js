import style from './Authorization.module.css';
import { Link } from 'react-router-dom' 

function Authorization() {
    return (
        <main className={style.main}>
            <div className={style.container}>
            <div className={style.containerEntrance} >
                <form className={style.entranceBlock} action="#">
                    <div className={style.entranceBlockConversion} >
                        <Link to="/registration" className={style.formAuth} >Зарегистрироваться</Link>
                    </div>
                    <div className={style.entranceBlockInfo}>
                        <h1 className={style.infoTitle}>ВХОД</h1>
                        <div className={style.infoInput}>
                            <input className={style.infoInputWindow}  type="email" name="Е-mail" placeholder="Логин"/>
                            <div className={style.infoInputError + " " + style.Error} >
                                Поле не должно быть пустым
                            </div>
                        </div>

                        <div className={style.infoInput}>
                            <input className={style.infoInputWindow} type="text" name="password" placeholder="Пароль"/>
                            <div className={style.infoInputError2 + " " + style.Error} >
                                Поле не должно быть пустым
                            </div>
                        </div>
                        <div className={style.infoCheckbox}>
                            <label className={style.checkLabel}>
                                <input className={style.checkInput} type="checkbox"/>
                                <span className={style.checkElem}  ></span>
                                Я согласен получать обновления на почту
                            </label>
                    
                        </div>
                        <div className={style.entranceError3 + " " + style.Error}>
                            Логин или пароль неверен
                        </div>
                    </div>
                    <div>
                        <Link to='/products'>
                            <button className={style.entranceBlockButton}>
                                <h1 className={style.entranceBlockButtonTitle}>Войти</h1>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            </div>
            
        </main>
    );
}

export default Authorization;