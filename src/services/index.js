import axios from 'axios';
const baseUrl = 'https://json-products.herokuapp.com/products';
const getAll = () =>{
    return axios.get(baseUrl)
}

  export default {
    getAll

  }