import React, { useState, useEffect } from 'react';
import DepartmentForm from '../components/DepartmentForm';
import DepartmentList from '../components/DepartmentList';
import DepartmentService from '../service/DepartmentService';
import { Modal, Button } from 'react-bootstrap';

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    DepartmentService.getDepartments()
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        setModalMessage(error.message); // Exibe a mensagem de erro no modal
        setShowModal(true);
      });
  }, []);

  const handleCreateDepartment = (newDepartment) => {
    DepartmentService.createDepartment(newDepartment)
      .then(response => {
        setDepartments([...departments, response.data]);
        setShowModal(false); // Fecha o modal ao criar um departamento
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
      <h2>Cadastro de Departamentos</h2>
      <DepartmentForm onCreate={handleCreateDepartment} />
      <DepartmentList departments={departments} />

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

export default DepartmentsPage;
