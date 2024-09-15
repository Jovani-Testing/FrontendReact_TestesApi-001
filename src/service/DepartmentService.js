import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // URL da sua API

const DepartmentService = {
  getDepartments: () => {
    return axios.get(`${API_BASE_URL}/department`, {
      headers: {
        'Accept': 'application/json',
      },
    }).then(response => {
      // Verifica se a resposta não contém dados
      if (response.data.length === 0) {
        throw new Error('Nenhum departamento encontrado.');
      }
      return response;
    }).catch(error => {
      // Retorna um erro legível para o frontend
      const errorMessage = error.response?.data?.message || 'Erro ao buscar departamentos';
      throw new Error(errorMessage);
    });
  },

  createDepartment: (department) => {
    return axios.post(`${API_BASE_URL}/department`, department, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(error => {
      // Retorna um erro legível para o frontend
      const errorMessage = error.response?.data?.message || 'Erro ao criar departamento';
      throw new Error(errorMessage);
    });
  },

  deleteDepartment: (departmentId) => {
    return axios.delete(`${API_BASE_URL}/department/${departmentId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(error => {
      // Retorna um erro legível para o frontend
      const errorMessage = error.response?.data?.message || 'Erro ao excluir departamento';
      throw new Error(errorMessage);
    });
  },
};

export default DepartmentService;
