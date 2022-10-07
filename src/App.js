import styled from 'styled-components';

import Header from "./components/Header";
import Main from "./components/Main";


const AppContainer = styled.div`
width:100%;
height:100vh;
display: flex;
flex-direction:column;
background: rgb(83,105,118);
background: linear-gradient(90deg, rgba(83,105,118,1) 0%, rgba(41,46,73,1) 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />

    </AppContainer>
  );
}

export default App;
