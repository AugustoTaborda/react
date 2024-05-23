import './App.css';
import { Card } from "./components/Card";
import styled from 'styled-components';
import { Contador } from './components/Contador';

const Conteiner1 = styled.div`

  display: flex;
  color: red;


`;

function App() {
  return  (
    <Conteiner1>
      <Card 
       title="teste1"
       content="Lorem Ipsum is simply"
      />
      <Contador />
    </Conteiner1>
      
  );

}

export default App;
