import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      name: 'Victor',
      id: 'u1',
      image: 'https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg',
      places: 3
    }
  ];
  return <UsersList items={USERS} />
};

export default Users;