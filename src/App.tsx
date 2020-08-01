import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
    LoginPage,
    RegisterPage,
    HomePage,
    CategoryPage,
    CategoryManage,
    PostsPage,
} from './pages';
import { AppHeader, AdminHeader } from './components';
import './App.scss';

const Frontend = () => {
    return (
        <div className="frontend">
            <AppHeader />
            <Switch>
                <Route path="/fe/home" component={HomePage} />
                <Route path="/fe/category" component={CategoryPage} />
                <Route path="/fe/posts" component={PostsPage} />
                <Redirect to="/fe/login" />
            </Switch>
        </div>
    );
};

const Backend = () => {
    return (
        <div className="backend">
            <AdminHeader />
            <Switch>
                <Route path="/be/category" component={CategoryManage} />
                <Redirect to="/be/category" />
            </Switch>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/fe" component={Frontend} />
                <Route path="/be" component={Backend} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect to="/login" />
            </Switch>
        </div>
    );
};

export default App;
