import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import TodoList from "./components/TodoList.js";
import AddList from "./components/AddList.js";
import ListTab from "./components/ListTab";
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
  const { list, setList } = useState(0);

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
          list: setList(prev),
        },
      ]);
      setInput("");
    }
  };

  const callBackTodoList = (list) => setTodoList(list);
  const callBackList = (list) => setList(list);
  const handleClear = () => {
    setTodoList(todoList.filter((t) => t.id === todoList.id));
  };
  return (
    <ChakraProvider>
      <Flex
        height={"100vh"}
        mt={24}
        flexDirection={"row"}
        alignItems={"flex-start"}
        justifyItems={"center"}
      >
        <Box maxW="2xl" m="0 auto">
          <Heading as="h1" size="3xl" textAlign="center">
            To Do List
          </Heading>
          <Divider />
          <ListTab callBackList={callBackList} lists={list} />
          <Box m={2}>
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
            <TodoList todoList={todoList} callBackList={callBackTodoList} />
          </UnorderedList>
          <Box
            m={2}
            display="flex"
            flexDirection="row"
            alignContent="center"
            justifyContent="center"
          >
            <Button colorScheme="blue" mr={2} onClick={() => handleClear()}>
              Clear
            </Button>
            <AddList />
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
