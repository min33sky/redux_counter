import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

// Redux 관련
import { createStore } from 'redux';
import reducers from './reducers';
// 리액트 앱과 스토어를 연동
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));




