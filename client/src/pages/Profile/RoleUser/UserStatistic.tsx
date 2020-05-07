import React from 'react';

import { UserLinkList } from './UserLinkList';
import { UserGetProductsForm } from './UserGetProductsForm';

export const UserStatistic: React.FC = () => {
  return (
    <div className='job-info'>
      <h3 className='job-info__title'>Информация о работе</h3>
      <div className='job-main'>
        <div className='job-info__role-user'>
          <UserLinkList />
          <UserGetProductsForm />
        </div>
      </div>
    </div>
  );
};
