import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import UserService from '../service/UserService';
import { Modal, Button } from 'react-bootstrap';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    UserService.getUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setModalMessage(error.message); // Exibe a mensagem de erro no modal
        setShowModal(true);
      });
  }, []);

  const handleCreateUser = (newUser) => {
    UserService.createUser(newUser)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        setModalMessage(error.message); // Exibe a mensagem de erro no modal
        setShowModal(true);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Cadastro de Usuários</h2>
      <UserForm onCreate={handleCreateUser} />
      <UserList users={users} />

      {/* Modal para exibir mensagens */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aviso</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UsersPage;
