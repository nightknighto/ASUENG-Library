import React from 'react';
import logo from './logo.svg';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
