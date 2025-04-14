import axios from 'axios';

// Define base URL
axios.defaults.baseURL = 'http://localhost:8080' ;

axios.get('/api/space')
    .then((response) => {
    response.data.forEach(item => console.log(item.name))
      })
