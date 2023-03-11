import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useState } from 'react';




const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-redius: 2px;
  cursor: pointer;
`;
const Text =  styled.input`
  border: 3px solid #000;
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`

`;
const handleClick = () => {
  const id = todoList.length + 1;
  setTodoList((prev) => [
    ...prev,
    {
      id: id,
      task: input,
      complete: false,
    },
  ]);
  setInput("");
};
function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  return (
    <Container>
        <div>
            <h2> To Do List </h2>
            <Text value={input} onInput={(e) => setInput.apply(e.target.value)} />
            <Button onClick={() => handleClick()}>Add</Button>
          <Tasks>
            <TaskCount>
              <b>Pending Tasks</b>
            </TaskCount>
          </Tasks>
          <div>
            <ul>
              
            </ul>
          </div>
          <Button>Clear</Button>
        </div>
    </Container>
  );
}

export default App;
