import * as React from 'react';
import { getPosts } from '../../../api/PostsApi';
import Masonry from 'react-masonry-component';
import './style.scss';

export const PostsPage = () => {
    React.useEffect(() => {
        getPosts().then(response => {});
    }, []);

    return (
        <div className="home-page">
            <Masonry elementType={'div'} options={{ transitionDuration: 5 }} />
        </div>
    );
};
