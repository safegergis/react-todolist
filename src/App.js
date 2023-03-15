import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import TodoList from "./components/TodoList.js";
import { LIST } from "./components/ListItem.js";
import AddList from "./components/AddList";

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
        flexDirection={"row"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box maxW="2xl" m="0 auto">
          <Heading as="h1" size="3xl" textAlign="center">
            {" "}
            To Do List{" "}
          </Heading>
          <Divider />
          <b>Pending Tasks</b> {todoList.length}
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
            <AddList />
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
