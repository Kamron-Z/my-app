import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./components/State/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addDialog, addPost, updateDialogState, updatePostState} from "./components/State/state";

let renderApp = (element) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={element} updatePostState={updatePostState} addPost={addPost} addDialog={addDialog} updateDialogState={updateDialogState}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderApp(state)

subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
