import axios from 'axios';
import configuration from '../constants/config';

export const getPosts = () => axios.get(`${configuration.domain}/get-posts`);
