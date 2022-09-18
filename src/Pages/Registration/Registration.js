import style from './Registration.module.css';
import { Link } from 'react-router-dom'
function Registration() {
    return (
        <main className={style.main}>
            <div className={style.container}>
            <div className={style.containerRegistration} id="form-registration">
                <form className={style.registrationBlock} action="#">
                    <div className={style.registrationBlockConversion}>
                        <Link to="/" className={style.formReg} id="form-reg">Авторизоваться</Link>
                    </div>
                    <div className={style.registrationBlockInfo}>
                        <h1 className={style.infoTitle}>РЕГИСТРАЦИЯ</h1>
                        <div className={style.infoInput}>
                            <input className={style.infoInputWindow} id = "email" type="email" name="Е-mail" placeholder="Логин"/>
                            <div className={style.infoInputError + " " + style.Error} id="registration-input-error">
                                Поле не должно быть пустым
                            </div>
                            <div className={style.infoInputError2 + " " + style.Error} id="registration-input-error2">
                                Логин должен содержать не менее 4-х символов
                            </div>
                        </div>
                
                        <div className={style.infoInput}>
                            <input className={style.infoInputWindow} id = "password" type="text" name="password" placeholder="Пароль"/>
                            <div className={style.infoInputError3 + " " + style.Error} id="registration-input-error3">
                                Поле не должно быть пустым
                            </div>
                            <div className={style.infoInputError4 + " " + style.Error} id="registration-input-error4">
                                Пароль должен содержать не менее 4-х символов
                            </div>
                        </div>
                        <div className={style.infoCheckbock}>
                            <label className={style.checkLabel} >
                                <input className={style.checkInput} id = "label" type="checkbox"/>
                                <span className={style.checkElem} id = "checkbox" ></span>
                                Я согласен получать обновления на почту
                            </label>
                        </div>
                    </div>
                    <div className={style.infoInputError5 + " " + style.Error} id="registration-input-error5">
                    Логин или пароль неверен
                    </div>
                    <div>
                        <Link to='/'>
                            <button className={style.registrationBlockButton}>
                                <h1 className={style.entranceBlockButtonTitle}>Регистрация</h1>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            </div>
        </main>
    );
}

export default Registration;