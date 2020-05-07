import React from 'react';
import { UserInfo, IProfileProps } from './UserInfo';
import { UserStatistic } from './UserStatistic';

export const RoleUser: React.FC<IProfileProps> = ({ userData: userInfo }) => {
  return (
    <>
      <div className='user-info-wrapper'>
        <UserInfo userData={userInfo} />
        <UserStatistic />
      </div>
    </>
  );
};
