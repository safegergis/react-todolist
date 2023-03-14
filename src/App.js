import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import React, { useState } from 'react';
import List from './components/List.js'
import {LIST} from "./components/ListItem.js"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Golos Text', sans-serif;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: navy;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ListContainer = styled(Container)`
  align-items: flex-start;
`
const BottomContainer = styled(Container)`
  flex-directions: row;
  align-items: center

`;
const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: navy;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
`;
const ClearButton = styled(Button)`
  display: flex
  align-items:center
`;
const Input =  styled.input`
  outline: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-size= 1.3rem;
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`
  text-align: center;
`;

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleClick = () => {
    if(input === ""){
      alert("Must input a task")
    } else {
      const id = todoList.length + 1;
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: input,
          complete: false,
        }
      ]);
      setInput("");
    }
  };

const callBackList = (list) => setTodoList(list);
const handleClear = () => {
  setTodoList(
    todoList.filter(t => t.id === todoList.id)
  )
  }
  return (
    <>
    <GlobalStyle />
      <Container>
          <div>
              <Title> To Do List </Title>
            <Tasks>
              <TaskCount>
                <b>Pending Tasks</b> {todoList.length}
              </TaskCount>
            </Tasks>
            <ListContainer>
              <LIST><Input value={input} onKeyPress={(e) =>{if (e.key === 'Enter') handleClick()}} onChange={e => setInput(e.target.value)} placeholder= "Enter your tasks here!"  /></LIST>
              <List todoList={todoList} callBackList={callBackList}/>
            </ListContainer>
            <BottomContainer>
              <ClearButton onClick={() => handleClear()}>Clear</ClearButton>
              </BottomContainer>
          
          </div>
      </Container>
      </>
  );
};

export default App;
