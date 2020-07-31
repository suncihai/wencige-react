import * as React from 'react';
import { LoginForm } from '../../../components';
import { getPosts } from '../../../api/PostsApi';
import './style.scss';

export const LoginPage = () => {
    React.useEffect(() => {
        getPosts().then(response => {
            console.log('response', response);
        });
    }, []);

    return (
        <main className="login-page">
            <span className="login-page-title">欢迎回来</span>
            <LoginForm />
        </main>
    );
};
