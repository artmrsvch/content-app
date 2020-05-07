interface IAuthValidate {
    login?: string;
    password?: string;
}

export const validate = (values: IAuthValidate): IAuthValidate => {
    const errors: IAuthValidate = {};
    if (!values.login) errors.login = "Введите логин";
    if (!values.password) errors.password = "Введите пароль";
    if (values.login && values.login.length < 4) {
        errors.login = "Минимум 4 символа";
    }
    if (values.password && values.password.length < 6) {
        errors.password = "Минимум 6 символов";
    }
    return errors;
};
