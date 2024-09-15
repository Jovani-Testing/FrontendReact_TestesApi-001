import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const DepartmentForm = ({ onCreate }) => {
  const [nome, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim()) {
      setError('O preenchimento do campo nome é obrigatório.');
      return;
    }

    setError('');
    onCreate({ nome });
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDepartmentName">
        <Form.Label>Nome do Departamento</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Insira o nome do departamento" 
          value={nome} 
          onChange={(e) => setName(e.target.value)} 
        />
        {error && <Form.Text className="text-danger">{error}</Form.Text>}
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Criar Departamento
      </Button>
    </Form>
  );
};

export default DepartmentForm;