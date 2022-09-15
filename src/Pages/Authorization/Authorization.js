import './Authorization.css';

function Authorization() {
    return (
        <main className='main'>
            <div class="container__entrance entrance" id="form-entrance">
                <form class="entrance-block" action="#">
                    <div class="entrance-block-conversion">
                        <a  href="#form-registration" class="form-auth" id="form-auth">Зарегистрироваться</a>
                    </div>
                    <div class="entrance-block__info info">
                        <h1 class="info-title">ВХОД</h1>
                        <div class="info-input">
                            <input class="info-input__window" id = "entrance-email" type="email" name="Е-mail" placeholder="Логин"/>
                            <div class="info-input-error error" id="entrance-input-error">
                                Поле не должно быть пустым
                            </div>
                        </div>

                        <div class="info-input">
                            <input class="info-input__window" id = "entrance-password" type="text" name="password" placeholder="Пароль"/>
                            <div class="info-input-error2 error" id="entrance-input-error2">
                                Поле не должно быть пустым
                            </div>
                        </div>
                        <div class="info-checkbox check">
                            <label class="check-label">
                                <input class="check__input" id = "entrance-label" type="checkbox"/>
                                <span class="check-elem" id = "entrance-checkbox" ></span>
                                Я согласен получать обновления на почту
                            </label>
                    
                        </div>
                        <div class="info-input-error3" id="entrance-error3">
                            Логин или пароль неверен
                        </div>
                    </div>
                    <div class="entrance-block__button">
                        <button class="button" id = "entrance-button" >Войти</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Authorization;