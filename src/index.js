import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updateNewPostText} from "./Redux/state";
import {addPost} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = ()=> {
    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
renderEntireTree(state);
reportWebVitals();
subscribe(renderEntireTree);