import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPostStore, updatePostState} from "./components/Redux/store";

export const rerender = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store} addPostStore={addPostStore}  updatePostState={updatePostState}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
