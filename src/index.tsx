import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { getInitStoreState } from './store/initStoreState';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './store/reducers';

//this history would help routering
export const history = createBrowserHistory();

const initialState = getInitStoreState();

const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: any = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });

  // Reload reducers
  module.hot.accept('./store/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}
