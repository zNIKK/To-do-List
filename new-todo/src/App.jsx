import React from 'react';
import ContextStates from './components/Context/ContextStates';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <ContextStates>
      <Header />
      <Main />
      <Footer />
    </ContextStates>
  );
}

export default App;
