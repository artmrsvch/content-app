import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { Form, Field } from 'react-final-form';

import { IProductForModal, IModalWithProduct } from './ProductTable';
import { InputBlock } from '../Auth/InputBlock';

const Modal: React.FC<IModal> = ({ product, closeModal }) => {
  const clickOnClosedButton = (e: SyntheticEvent) => {
    closeModal({ product: null, isModalOpen: false });
  };

  const submit = (fields: ISubmitFileds) => {
    const formData = new FormData();
    formData.append('type', fields.type);
    formData.append('property', fields.property);
    formData.append(product![0].type, product![0].value);
    formData.append(product![1].type, product![1].value);
    formData.append(product![2].type, product![2].value);

    //SEND FORM-DATA

    closeModal({ product: null, isModalOpen: false });
  };

  const validateFields = (values: IValidateFields): IValidateFields => {
    const errors: IValidateFields = {};

    if (!values.type) errors.type = 'Как без типа тебе значение добавят?';
    if (!values.property) errors.property = 'Какое значение то?';
    if (values.type && values.type.length < 3) {
      errors.type = 'Нет типа менее 3х символов, не тупи)';
    }

    return errors;
  };
  return (
    <div className="modal">
      <button onClick={clickOnClosedButton} className="close" type="button"></button>
      <ul className="modal-product-info">
        {product?.map((frame, iter) => (
          <li key={iter} className="modal-product-info__item">
            <span className="modal-product-info__type">{frame.name}</span>
            <span className="modal-product-info__property">{frame.value}</span>
          </li>
        ))}
      </ul>
      <Form
        onSubmit={submit}
        validate={validateFields}
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-form-fields">
              <h4 className="modal-form-fields__title">
                Добавление недостающего параметра в наборе атрибутов
              </h4>
              <Field
                component={InputBlock}
                label="Тип"
                name="type"
                type="text"
                placeholder="Введите тип"
                setClass="modal-form__input"
              />
              <Field
                component={InputBlock}
                label="Значение"
                name="property"
                type="text"
                setClass="modal-form__input"
                placeholder="Введите значение"
              />
            </div>
            <button className="workspace-submit__btn" type="submit">
              Отправить
            </button>
          </form>
        )}
      />
    </div>
  );
};

interface IModal {
  product: IProductForModal[] | null;
  closeModal: Dispatch<SetStateAction<IModalWithProduct>>;
}
interface IValidateFields {
  type?: string;
  property?: string;
}
interface ISubmitFileds {
  type: string;
  property: string;
}

export default Modal;
