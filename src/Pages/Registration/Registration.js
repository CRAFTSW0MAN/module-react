import './Registration.css';

function Registration() {
    return (
        <main className='main'>
            <div class="container__registration registration" id="form-registration">
                <form class="registration-block" action="#">
                    <div class="registration-block-conversion">
                        <a href="#form-entrance" class="form-reg" id="form-reg">Авторизоваться</a>
                    </div>
                    <div class="registration-block__info info">
                        <h1 class="info-title">РЕГИСТРАЦИЯ</h1>
                        <div class="info-input">
                            <input class="info-input__window" id = "email" type="email" name="Е-mail" placeholder="Логин"/>
                            <div class="info-input-error error" id="registration-input-error">
                                Поле не должно быть пустым
                            </div>
                            <div class="info-input-error2 error" id="registration-input-error2">
                                Логин должен содержать не менее 4-х символов
                            </div>
                        </div>
                
                        <div class="info-input">
                            <input class="info-input__window" id = "password" type="text" name="password" placeholder="Пароль"/>
                            <div class="info-input-error3 error" id="registration-input-error3">
                                Поле не должно быть пустым
                            </div>
                            <div class="info-input-error4 error" id="registration-input-error4">
                                Пароль должен содержать не менее 4-х символов
                            </div>
                        </div>
                        <div class="info-checkbox check">
                            <label class="check-label" >
                                <input class="check__input" id = "label" type="checkbox"/>
                                <span class="check-elem" id = "checkbox" ></span>
                                Я согласен получать обновления на почту
                            </label>
                        </div>
                    </div>
                    <div class="info-input-error5 " id="registration-input-error4">
                    Логин или пароль неверен
                    </div>
                    <div class="registration-block__button">
                        <button class="button" id = "button">Войти</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Registration;