import { Post } from '../models/Post';
import axios from 'axios';
import configuration from '../constants/config';

export const getPosts = () => {
    return axios.get(`${configuration.domain}/get-posts`);
    // return axios({
    //     method: 'GET',
    //     url: `${configuration.domain}/get-posts`,
    //     withCredentials: true,
    //     headers: { 'Access-Control-Allow-Origin': '*' },
    // });
};
