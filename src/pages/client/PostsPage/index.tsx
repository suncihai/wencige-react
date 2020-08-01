import * as React from 'react';
import { getPosts } from '../../../api/PostsApi';
import './style.scss';

export const PostsPage = () => {
    React.useEffect(() => {
        getPosts().then(response => {
            console.log('response', response);
        });
    }, []);

    return <div className="home-page" />;
};
