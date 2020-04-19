import React from 'react';
import Header from './components/HeaderComponent';
import Feed from './components/FeedComponent'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Feed />
    </>
  );
}

export default App;
