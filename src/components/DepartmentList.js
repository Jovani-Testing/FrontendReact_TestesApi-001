import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import DepartmentService from '../service/DepartmentService';  // Essa importação está sendo usada corretamente

const DepartmentList = ({ departments, onEdit, onError }) => {
  const [departmentsState, setDepartmentsState] = useState(departments);

  useEffect(() => {
    setDepartmentsState(departments);
  }, [departments]);

  const handleDelete = async (departmentId) => {
    try {
      await DepartmentService.deleteDepartment(departmentId);
      const updatedDepartments = departmentsState.filter(dept => dept.id !== departmentId);
      setDepartmentsState(updatedDepartments);
    } catch (error) {
      onError(error.response.data.message);  // Verifica se onError está sendo passado corretamente
    }
  };

  return (
    <ListGroup className="form-group-spacing">
      <h3>Departamentos cadastrados</h3>
      {departmentsState.map(dept => (
        <ListGroup.Item key={dept.id} className="d-flex justify-content-between align-items-center">
          {dept.nome}
          <div>
            <Button 
              variant="warning" 
              size="sm" 
              className="me-2"
              onClick={() => onEdit(dept)}
            >
              Editar
            </Button>
            <Button 
              variant="danger" 
              size="sm" 
              onClick={() => handleDelete(dept.id)}
            >
              Excluir
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DepartmentList;
