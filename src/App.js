import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import back from './images/distibution.jpg'
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  
 
`;


function App() {
  return (
    <AppContainer style={{backgroundImage:`url(${back})`, width: '100vw',
    height: '100vh',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'}}>
      <AccountBox />
    </AppContainer>
  );
}

export default App;
