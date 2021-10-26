import React from 'react';
import logo from './logo.svg';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/Page';
import Main from './components/Main';
import { ObjectContextProvider } from './ObjectContext';




function App() {
  return (
    <ObjectContextProvider>
      <Main />
    </ObjectContextProvider>
  );
}

export default App;
