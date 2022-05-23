import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store" ;
import state, {addPost} from "./Redux/state";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state)=> {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());
reportWebVitals();
store.subscribe(() => {
   let state = store.getState();
    renderEntireTree(state);
});