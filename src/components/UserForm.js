import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UserForm = ({ onCreate, departments = [] }) => { // Define um valor padrão como array vazio
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      nome,
      email,
      department: {
        id: parseInt(department, 10) // Converte o valor do departamento para número e adiciona ao objeto
      }
    };

    onCreate(user);

    setName('');
    setEmail('');
    setDepartment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Insira o nome do usuário" 
          value={nome} 
          onChange={(e) => setName(e.target.value)} 
        />
      </Form.Group>
      <Form.Group controlId="formUserEmail" className="mt-2">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Insira o email do usuário" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </Form.Group>
      <Form.Group controlId="formUserDepartment" className="mt-2">
        <Form.Label>Departamento</Form.Label>
        <Form.Control 
          as="select" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Selecione um departamento</option>
          {departments.map(dept => ( // Garante que departments seja um array
            <option key={dept.id} value={dept.id}>{dept.nome}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Criar Usuário
      </Button>
    </Form>
  );
};

export default UserForm;
