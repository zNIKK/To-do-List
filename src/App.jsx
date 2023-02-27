import React from 'react';
import ContextStates from './components/Context/ContextStates';
import ContextTheme from './components/Context/ContextTheme';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import GlobalStyled from './style/GlobalStyles';

function App() {
  return (
    <ContextStates>
      <ContextTheme>
        <GlobalStyled />
        <div className="container">
          <Header />
          <div className="content">
            <Main />
            <Footer />
          </div>
        </div>
      </ContextTheme>
    </ContextStates>
  );
}

export default App;
