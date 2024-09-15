import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import UserService from '../service/UserService';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers().then(response => setUsers(response.data));
  }, []);

  const handleCreateUser = (newUser) => {
    UserService.createUser(newUser).then(response => {
      setUsers([...users, response.data]);
    });
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <UserForm onCreate={handleCreateUser} />
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;