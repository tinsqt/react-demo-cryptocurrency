import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import './App.css';
import './index.css';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Main />
            </div>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
