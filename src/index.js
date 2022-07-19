import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './components/features/MovieReducer';

const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
