import axios from 'axios';
import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (e) {}
  }

  return (
    <div>
      {' '}
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} />
        )}
      />
    </div>
  );
};

export default UserPage;
