import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import TodoList from "./components/TodoList.js";
import { LIST } from "./components/ListItem.js";
import {
  ChakraProvider,
  Heading,
  Input,
  Button,
  UnorderedList,
  ListItem,
  Box,
  Divider,
  Flex,
} from "@chakra-ui/react";

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
`;
const BottomContainer = styled(Container)`
  flex-directions: row;
  align-items: center;
`;
/*
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
`;*/
/*
const Input =  styled.input`
  outline: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-size= 1.3rem;
`;*/
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`
  text-align: center;
`;

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    if (input === "") {
      alert("Must input a task");
    } else {
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
    }
  };

  const callBackList = (list) => setTodoList(list);
  const handleClear = () => {
    setTodoList(todoList.filter((t) => t.id === todoList.id));
  };
  return (
    <ChakraProvider>
      <Flex
        height={"100vh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <div>
          <Heading as="h1" size="3xl" textAlign="center">
            {" "}
            To Do List{" "}
          </Heading>
          <Divider />
          <Box margin="10px">
            <b>Pending Tasks</b> {todoList.length}
          </Box>
          <UnorderedList>
            <ListItem>
              <Input
                value={input}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleClick();
                }}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your tasks here!"
              />
            </ListItem>
            <TodoList todoList={todoList} callBackList={callBackList} />
          </UnorderedList>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button onClick={() => handleClear()}>Clear</Button>
          </Box>
        </div>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
