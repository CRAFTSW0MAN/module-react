import style from './Authorization.module.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { removeUser } from '../../store/reducers/form.js'

function Authorization(data) {
    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    //состояние ошибки 
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [entranceError, setEntranceError] = useState('');
    // Вызываем массив из form
    const users = useSelector(state => state.user.user)

    const loginHandler = (e) => {
        setLogin(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const handeleСreationAuth = (e) => {
        e.preventDefault();
        if(login == ''){
            setLoginError('Поле не должно быть пустым');
            if(password == ''){
                setPasswordError('Поле не должно быть пустым');
                return;
            } else {
                setPasswordError('');
            };
            return;

        } else {
            let findUser = users.find(item => item.login === login);
            if (findUser && (findUser.password === password)){
                setLoginError('');
                setPasswordError('');
                setEntranceError('');
                console.log ('прошла проверку ', findUser, login, password, users);
                dispatch (removeUser());
            }else {
                if(password == ''){
                    setLoginError('');
                    setPasswordError('Поле не должно быть пустым');
                    return;
                } else {
                    setLoginError('');
                    setPasswordError('');
                    setEntranceError ('Логин или пароль неверен');
                    console.log('не прошла проверку ' , findUser, login, password, users);
                }
            }
        }
    }



    // // привязка к action
    // const login = useSelector(state => state.user.login)
    // const password = useSelector(state => state.user.login)
    // const dispatch = useDispatch()
    // let item = {
    //     idx: uuidv4(),
    //     id: id,
    //     name: name,
    //     img: img,
    //     price: price,
    //     info: info,
    // }
    // const handeleAddProdeuct = (e) => {
    //     dispatch(addProduct(item));
    // }
    // const handelClick = () => {

        
    //     debugger;
    //     let a = this.state.login;
        // e.preventDefault()
        // if (document.querySelector('.InputError').value === ''){
        //     document.querySelector('.InputError').style.color = '#FF0B0B';
        // } else{
        //     document.querySelector('.InputError').style.color = '#FFFFFF';
        // }
    // }
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
                            
                            <input onChange = {e => loginHandler(e)} className={style.infoInputWindow} value={login} type="text" name="Е-mail" placeholder="Логин"/>
                            <div className={style.infoInputError + ' ' + style.Error}>{loginError}</div>
                        </div>

                        <div className={style.infoInput}>
                            <input onChange = {e => passwordHandler(e)} className={style.infoInputWindow} value={password} type="text" name="password" placeholder="Пароль"/>
                            <div className={style.infoInputError2 + ' ' + style.Error}>{passwordError}</div>
                        </div>
                        <div className={style.infoCheckbox}>
                            <label className={style.checkLabel}>
                                <input className={style.checkInput} type="checkbox"/>
                                <span className={style.checkElem}  ></span>
                                Я согласен получать обновления на почту
                            </label>
                    
                        </div>
                        <div className={style.entranceError3 + " " + style.Error}>{entranceError}</div>
                    </div>
                    <div>
                        
                            <button onClick={handeleСreationAuth}  className={style.entranceBlockButton}>
                                <h1 className={style.entranceBlockButtonTitle}>Войти</h1>
                            </button>
                    </div>
                </form>
            </div>
            </div>
            
        </main>
    );
}

export default Authorization;