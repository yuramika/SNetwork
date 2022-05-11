import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state";
import {addPost} from "./Redux/state";
import {renderEntireTree} from "./Render";

renderEntireTree(state);
reportWebVitals();
