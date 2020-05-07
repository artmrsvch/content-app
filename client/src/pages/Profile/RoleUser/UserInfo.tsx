import React from 'react';

export interface IProfileProps {
  userData: IUserInfo;
}

export const UserInfo: React.FC<IProfileProps> = ({ userData }) => {
  const getPercent = (allProducts: string | number, withErrors: string | number): number => {
    const result: string = ((Number(withErrors) / Number(allProducts)) * 100).toFixed(2);

    return Number(result);
  };

  return (
    <div className='user-about'>
      <span className='user-about__name'>{userData.name}</span>
      <span className='user-about__date'>
        Дата регистрации: <b className='loadable-value'>{userData.date}</b>
      </span>
      <div className='user-work-info'>
        <span className='user-work-info__products'>
          Выполненных товаров: <b className='loadable-value'>{userData.products} шт</b>
        </span>
        <span className='user-work-info__errors'>
          Товаров с ошибками: <b className='loadable-value__red'>{userData.withError} шт</b>
        </span>
        <span className='user-work-info__errors'>
          Доработанных товаров: <b className='loadable-value__green'>{userData.withEdits} шт</b>
        </span>
        <span className='user-work-info__percent'>
          Процент ошибок:{' '}
          <b className='loadable-value'>{`${getPercent(userData.products, '112')}%`}</b>
        </span>
      </div>
      <div className='user-work-info'>
        <span className='user-work-info__paid'>Реквизиты {userData.payment.type}</span>
        <span className='user-work-info__paid'>{userData.payment.name}</span>
        <b className='loadable-value'>{userData.payment.requisites}</b>
      </div>
      <span className='user-work-info__paid'>
        К оплате: <b className='loadable-value'>{userData.toPay} руб</b>
      </span>
    </div>
  );
};

export interface IUserInfo {
  name: string;
  date: string;
  products: string | number;
  withError: string | number;
  withEdits: string | number;
  payment: {
    name: string | null;
    type: string;
    requisites: string | null;
  };
  toPay: string | number;
}
