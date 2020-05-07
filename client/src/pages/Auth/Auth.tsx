import React from "react";
import { useDispatch } from "react-redux";

import {auth} from '../../models/actions'

import { Link, RouteComponentProps  } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { validate } from "./validate";
import { InputBlock } from "./InputBlock";

interface SubmitFileds {
    login: string;
    password: string;
}
interface ChildComponentProps extends RouteComponentProps<any> {
    /* other props for ChildComponent */
}

const Auth: React.FC<ChildComponentProps> = ({history}) => {
    const dispatch = useDispatch()

    const submit = (fields: SubmitFileds) => {
        const formData = new FormData();
        formData.append("login", fields.login);
        formData.append("password", fields.password);;
        
        history.push("/workspace");
        dispatch(auth())
    };
    return (
        <section className="section section-auth">
            <div className="auth">
                <h2 className="auth__title">Welcome</h2>
                <Form
                    onSubmit={submit}
                    validate={validate}
                    render={({ handleSubmit, invalid }) => (
                        <form onSubmit={handleSubmit} className="auth-form">
                            <Field
                                component={InputBlock}
                                label="Логин"
                                name="login"
                                type="text"
                                placeholder="Введите логин"
                            />
                            <Field
                                component={InputBlock}
                                label="Пароль"
                                name="password"
                                type="password"
                                placeholder="Введите пароль"
                            />
                            <button disabled={invalid} className="auth-form__submit" type="submit">
                                {invalid ? "Заполните все поля" : "Войти"}
                            </button>
                        </form>
                    )}
                />
                <div className="auth-sign">
                    <span className="auth-sign__text">Нет аккаунта?</span>
                    <Link className="auth-sign__link" to="/registry">
                        Зарегистироваться
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Auth;
