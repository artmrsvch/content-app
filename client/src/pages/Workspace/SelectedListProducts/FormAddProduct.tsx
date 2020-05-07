import React from 'react';
import { useDispatch } from 'react-redux';

import { showAsideBar } from '../../../models/actions';
import { Select } from '../../../components';
import { addLinkToProduct } from '../helpers';

export const FormAddProduct: React.FC<IFormTypes> = ({ products, type }) => {
  const dispatch = useDispatch();
  const submitCheckedProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formElements = target.elements as any; //as HTMLFormControlCollection

    switch (type) {
      case 'params':
        console.log('сабмит параметров');
        break;
      case 'perfomed':
        console.log('сабмит работы');
        break;
    }

    if (formElements.status.value === 'Добавлено') {
      const submitProducts = addLinkToProduct(products);
      console.log(submitProducts);
      dispatch(
        showAsideBar({
          status: true,
          isError: false,
          message: 'Отмечены как ВЫПОЛНЕНЫ',
        })
      );
    } else {
      const comment = formElements.userComment.value.trim();

      if (!comment.length) {
        dispatch(
          showAsideBar({
            status: true,
            isError: true,
            message: 'Комментарий обязателен',
          })
        );
      } else {
        dispatch(
          showAsideBar({
            status: true,
            isError: false,
            message: 'Отмечены как НЕ выполнены',
          })
        );
      }
    }
  };

  return (
    <form onSubmit={submitCheckedProducts} className='workspace-submit'>
      <Select options={['Добавлено', 'Не добавлено']} />
      <div className='workspace-comment'>
        <div className='workspace-comment__title'>Добавить комментарий</div>
        <textarea
          placeholder='Введите комментарий'
          className='workspace-comment__area'
          name='userComment'></textarea>
      </div>
      <button className='workspace-submit__btn' type='submit'>
        Сохранить
      </button>
    </form>
  );
};

interface IFormTypes {
  products: any;
  type: string;
}
