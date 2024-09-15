import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import UserService from '../service/UserService';

const UserList = ({ users, onEdit, onDelete }) => (
  <ListGroup className="form-group-spacing">
    <h3>Usuários cadastrados</h3>
    {users.map(user => (
      <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
        {user.nome} ({user.email})
        <div>
          <Button 
            variant="warning" 
            size="sm" 
            className="me-2"
            onClick={() => onEdit(user)}
          >
            Editar
          </Button>
          <Button 
            variant="danger" 
            size="sm" 
            onClick={() => onDelete(user.id)}
          >
            Excluir
          </Button>
        </div>
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default UserList;