import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // URL da sua API

const UserService = {
  getUsers: () => {
    return axios.get(`${API_BASE_URL}/users`, {
      headers: {
        'Accept': 'application/json',
      },
    }).catch(error => {
      const errorMessage = error.response?.data?.message || 'Erro ao buscar usuários';
      throw new Error(errorMessage); // Lança um erro legível
    });
  },

  createUser: (user) => {
    return axios.post(`${API_BASE_URL}/users`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(error => {
      const errorMessage = error.response?.data?.message || 'Erro ao criar usuário';
      throw new Error(errorMessage); // Lança um erro legível
    });
  },
};

export default UserService;