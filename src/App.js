import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import React, { useState } from 'react';

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
const BottomContainer = styled(Container)`
  flex-directions: row;
  justify-items: center;
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
  border-radius: 2px;
  cursor: pointer;
`;
const ClearButton = styled(Button)`
  display: flex
  align-items:center
`;
const Input =  styled.input`
  border: 2px solid #000;
  width: 200px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
`;
const TaskCount = styled.span`
  margin: 10px;
  
`;
const Tasks = styled.div`
  text-align: center;
`;
const LIST = styled.li`
  listStyle:"none";
  text-decoration: "line-through";
  text-align: center;
`

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleClick = () => {
    if(input == ""){
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

const handleComplete = (id) => {
  let list = todoList.map((task) => {
    let item = {};
    if (task.id == id) {
      if (!task.complete){
        setCompletedTaskCount(completedTaskCount+1);
      } else {
        setCompletedTaskCount(completedTaskCount-1);
      }
      item = {...task, complete: !task.complete};
      } else item = {...task};
      return item;
    });
    setTodoList(list);
  };
const handleClear = () => {
  setTodoList(
    todoList.filter(t => t.id == todoList.id)
  )
  }
  return (
    <>
    <GlobalStyle />
      <Container>
          <div>
              <Title> To Do List </Title>
              <Input value={input} onChange={e => setInput(e.target.value)} />
              <Button onClick={() => handleClick()}>Add</Button>
            <Tasks>
              <TaskCount>
                <b>Pending Tasks</b> {todoList.length}
              </TaskCount>
            </Tasks>
            <div>
              <ul>
                {todoList.map((todo) => {
                  return (
                    <LIST
                      complete={todo.complete}
                      id={todo.id}
                      onClick = {() => handleComplete(todo.id)}
                      style = {{
                        listStyle: "none",
                        textDecoration: todo.complete && "line-through",
                      }}
                      >
                        {todo.task}
                      </LIST>
                  );
                })}
              </ul>
            </div>
            <BottomContainer>
              <ClearButton onClick={() => handleClear()}>Clear</ClearButton>
              </BottomContainer>
          
          </div>
      </Container>
      </>
  );
};

export default App;
