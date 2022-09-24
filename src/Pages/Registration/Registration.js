import style from './Registration.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { creationAuth } from '../../store/reducers/form.js';

function Reg() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    //состояние ошибки 
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    //для навигации 
    const navigate = useNavigate();
    // для проверки состояний 
    let loginСheck = false;
    let passwordСheck = false;

    // чтобы значения из инпута попадали в логин и пароль 
    const loginHandler = (e) => {
        setLogin(e.target.value)
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    };

    const handeleСreationReg = (e) => {
        e.preventDefault();
        //валидация для логина
        if(login === ''){
            setLoginError('Поле не должно быть пустым');
            loginСheck = false;                  
        } else if(login.length < 4) {
            setLoginError('Логин должен содержать не менее 4-х символов');
            loginСheck = false;
        } else {
            setLoginError('');
            loginСheck = true;
        };
        //валидация для пароля
        if(password === ''){
            setPasswordError('Поле не должно быть пустым');
            passwordСheck = false;        
        } else if(password.length < 4) {
            setPasswordError('Логин должен содержать не менее 4-х символов');
            passwordСheck = false;
        } else {
            setPasswordError('');
            passwordСheck = true;
        };
        console.log(loginСheck,passwordСheck);
        console.log(login,password);
        // проверка общего состояния и если все хорошо переход на Вход
        if(loginСheck === true && passwordСheck === true){
            dispatch(creationAuth({
                login, password
            })); 
            navigate('/');
        };
    };

    return (
        <main className={style.main}>
            <div className={style.container}>
            <div className={style.containerEntrance} >
                <form className={style.entranceBlock} action="#">
                    <div className={style.entranceBlockConversion} >
                        <Link to="/" className={style.formAuth} >Авторизоваться</Link>
                    </div>
                    <div className={style.entranceBlockInfo}>
                        <h1 className={style.infoTitle}>РЕГИСТРАЦИЯ</h1>
                        <div className={style.infoInput}>
                            <input onChange = {e => loginHandler(e)} className={style.infoInputWindow} value={login} type="text" name='login' placeholder="Логин"/>
                            <div className={style.infoInputError + ' ' + style.Error}>{loginError}</div>
                        </div>

                        <div className={style.infoInput}>
                        <input onChange = {e => passwordHandler(e)} className={style.infoInputWindow} value={password} type="text" name='password' placeholder="Пароль"/>
                            <div className={style.infoInputError2 + ' ' + style.Error}>{passwordError}</div>
                        </div>
                        <div className={style.infoCheckbox}>
                            <label className={style.checkLabel}>
                                <input className={style.checkInput} type="checkbox"/>
                                <span className={style.checkElem}  ></span>
                                Я согласен получать обновления на почту
                            </label>
                        </div>
                    </div>
                    <div>
                            <button onClick={handeleСreationReg} className={style.entranceBlockButton} type= 'submit'>
                                <h1 className={style.entranceBlockButtonTitle}>Зарегистрироваться</h1>
                            </button>
                    </div>
                </form>
            </div>
            </div>
            
        </main>
    );
};

export default Reg;