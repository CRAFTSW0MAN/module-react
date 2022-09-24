import style from './Registration.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { toggleModalVisability } from '../../store/reducers/basket.js';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit, //  метод handleSubmit  вызываясь ,будет содержать в себе  хук useForm
        reset
        } = useForm({ 
        mode: 'onSubmit'
    });

    // создаем свой хендлер для обработки данных
    // принимает набор данных data

    const onSubmit = (data) => {

        const { login, password } = data;
        alert (JSON.stringify(data)) //  появится если все хорошо и ошибок нет.
        const users = JSON.parse(localStorage.getItem('users'));
        users.login = login;
        users.password = password;
        const arr = [];
        arr.push (users);

        // switch(login) {
        //     case 'login': // проверка состояний 
        //         users.push({ login});
        //         break
        // }
        // switch(password) {
        //     case 'password':
        //         users.push({ password});
        //         break
        // }
        localStorage.setItem('arr', JSON.stringify(arr));
        //navigate('/');
        console.log(arr);
         // switch({users}) {
        //     case 'users':
        //         arr.push(users);
        //         localStorage.setItem('arr', JSON.stringify(arr));
        //         console.log(JSON.parse(JSON.stringify(arr)));
        //         break
        // }
        // localStorage.setItem('users', JSON.stringify(users));
        // const arr =  [];
        // arr = JSON.parse(localStorage.getItem("arr")) || [];
        // arr.push(users);
        // localStorage.setItem('arr', JSON.stringify(arr));
        // console.log(JSON.parse(JSON.stringify(arr)));
        //navigate('/');
        // console.log(users);
        // const user = users.find(user => user.login === login)
        // const user = [];
    
        // if (user) {
        //     reset(); //очистка всех полей
        //     dispatch(toggleModalVisability());
            
        // } else {
        //     users.push({ login, password });
        //     localStorage.setItem('users', JSON.stringify(users));
        //     navigate('/');
        //     console.log(localStorage.setItem('users', JSON.stringify(users)));
        // }
    }
    return (
        <main className={style.main}>
            <div className={style.container}>
            <div className={style.containerRegistration} id="form-registration">
                {/* передает {handleSubmit(onSubmit) тем самым вывывая наш хендлер,который отправит все данные в data, он будет срабатывать только если нет ошибок!это благодаря обретке handleSubmit */}
                <form className={style.registrationBlock} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.registrationBlockConversion}>
                        <Link to="/" className={style.formReg} id="form-reg">Авторизоваться</Link>
                    </div>
                    <div className={style.registrationBlockInfo}>
                        <h1 className={style.infoTitle}>РЕГИСТРАЦИЯ</h1>
                        <div className={style.infoInput}>
                            {/* метод useForm возвращает объект поэтому используем деструтуризацию ,чобы все методы в импут сразу добавить, сам register состоит  ('уникальное имя(используется к примеру для ошибки )',{объект проверки })*/}
                            <input className={style.infoInputWindow} type="text" placeholder='Логин' {...register('login', {
                                required: 'Поле не должно быть пустым',
                                minLength: {
                                value: 4,
                                message: 'Логин должен содержать не менее 4-х символов'
                            },
                            })} />
                            {/* объект ошибок! если в логин будет  несоответствие тому что мы задали,выдает ошибку что выше если нет то пустую строку   */}
                            <p className={style.infoInputError + " " + style.Error}>{errors?.login?.message || ''}</p>
                        </div>
                
                        <div className={style.infoInput}>
                            <input className={style.infoInputWindow} type="password" placeholder='Пароль' {...register('password', {
                                required: 'Поле не должно быть пустым',
                                minLength: {
                                    value: 4,
                                    message: 'Пароль должен содержать не менее 4-х символов'
                                },
                                })} />
                                {/* присваиваем класс к строчке ниже делаем ее пустой если условие ошибки совпадают то появляется или 'Поле не должно быть пустым'
                                или 'Пароль должен содержать не менее 4-х символов',если же все хорошо то пустое окно ,что показано ниже  */}
                                <p className={style.infoInputError2 + " " + style.Error}>{errors?.password?.message || ''}</p> 

                        </div>
                        <div className={style.infoCheckbock}>
                            <label className={style.checkLabel} >
                                <input className={style.checkInput} id = "label" type="checkbox"/>
                                <span className={style.checkElem} id = "checkbox" ></span>
                                Я согласен получать обновления на почту
                            </label>
                        </div>
                    </div>
                    <div>
                        
                            <button className={style.registrationBlockButton } type="submit" >
                                <h1 className={style.entranceBlockButtonTitle}>Регистрация</h1>
                            </button>
                        
                    </div>
                </form>
            </div>
            </div>
            {/* <input className={style.infoInputWindow} id = "email" type="email" name="Е-mail" placeholder="Логин"/>
                            <div className={style.infoInputError + " " + style.Error} id="registration-input-error">
                                Поле не должно быть пустым
                            </div>
                            <div className={style.infoInputError2 + " " + style.Error} id="registration-input-error2">
                                Логин должен содержать не менее 4-х символов
                            </div> */}
            {/* <input className={style.infoInputWindow} id = "password" type="text" name="password" placeholder="Пароль"/>
                            <div className={style.infoInputError3 + " " + style.Error} id="registration-input-error3">
                                Поле не должно быть пустым
                            </div>
                            <div className={style.infoInputError4 + " " + style.Error} id="registration-input-error4">
                                Пароль должен содержать не менее 4-х символов
                            </div> */}
        </main>
    );
}

export default Registration;