import axios from 'axios';

const API_URL = 'http://localhost:3000';

const getData = {
  senators: (state) => {
    return axios.get(`${API_URL}/senators/${state}`)
      .then(response => response.data.results);
  },
  representatives: (state) => {
    return axios.get(`${API_URL}/representatives/${state}`)
      .then(response => response.data.results);
  }
}

export default getData;