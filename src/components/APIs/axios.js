import axios from 'axios';
const API_KEY = '35160864-8ca81e651f434a7e9dfe21623';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = { per_page: 12, key: API_KEY };

export default axios;
