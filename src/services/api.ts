/**
 * IMPORTS
 */
 import axios from 'axios';


 /**
  * EXPORTS
  */
 export const api = axios.create({
     baseURL: 'https://5ff337f028c3980017b191c7.mockapi.io/robofone/api/calls'
 });
