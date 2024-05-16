import './App.css';
import { Card } from "./components/Card";
import styled from 'styled-components';

const Conteiner1 = styled.div`

  display: flex;
  color: red;


`

function App() {
  return  (
    <Conteiner1>
      <Card 
       title="teste1"
       content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Card title="teste2"/>
      <Card title="teste3"/>
    </Conteiner1>
      
  );

}

export default App;
