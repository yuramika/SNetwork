import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store" ;
import state, {addPost} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state)=> {
    root.render(
        <React.StrictMode>
            <App appState={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());
reportWebVitals();
store.subscribe(() => {
   let state = store.getState();
    renderEntireTree(state);
});