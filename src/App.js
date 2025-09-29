import React from 'react';
import styled from 'styled-components';
import './App.css';

// Components
import Header from './components/Header';
import TeamPage from './components/TeamPage';
import Footer from './components/Footer';

function App() {
  return (
    <AppContainer>
      <Header />
      <TeamPage />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: 'Times New Roman', serif;
  background-color: #f8e8d8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
