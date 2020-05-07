import React from 'react';
import { Form, Field } from 'react-final-form';

import { InputBlock } from '../../Auth/InputBlock';

type QuantityProductType = { quantity?: string }; // or number?? need test
type QuantitySubmitType = { quantity: string };

export const UserGetProductsForm: React.FC = () => {
  const validate = (values: QuantityProductType): QuantityProductType => {
    const errors: QuantityProductType = {};
    if (!values.quantity) errors.quantity = 'Укажи сколько возьмешь';
    if (Number(values.quantity) > 20) errors.quantity = 'Максимум 20 товаров за раз';
    if (Number(values.quantity) <= 0) errors.quantity = 'Ты за меня придурка не держи';
    if (values.quantity) {
      const regExp = /^[0-9]+$/;
      const bool = regExp.test(values.quantity);
      if (!bool) errors.quantity = 'Можно только с зарплаты отминусовать';
    }
    return errors;
  };
  const submit = (fields: QuantitySubmitType) => {
    const formData = new FormData();
    formData.append('quantity', fields.quantity);
  };

  return (
    <Form
      onSubmit={submit}
      validate={validate}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit} className='profile-getProducts'>
          <h5 className='profile-getProducts__title'>Взять товаров в работу</h5>
          <div className='products-inWork'>
            <span className='products-inWork__text'>В работе: </span>
            <span className='products-inWork__int'>18 шт</span>
          </div>

          <Field
            component={InputBlock}
            name='quantity'
            type='number'
            max='20'
            min='1'
            required
            setClass='profile-getProducts__input'
            placeholder='Сколько?'
          />

          <button className='workspace-submit__btn profile-getProducts__btn' type='submit'>
            Взять
          </button>
        </form>
      )}
    />
  );
};
