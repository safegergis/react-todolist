import React, { useState } from "react";
import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { ListItem, Button } from "@chakra-ui/react";

export default function ListItems({ todo, handleTrash, handleComplete }) {
  const [trashShown, setTrashShown] = useState(false);

  const listItem = (
    <ListItem
      complete={todo.complete}
      id={todo.id}
      onMouseEnter={() => setTrashShown(true)}
      onMouseLeave={() => setTrashShown(false)}
      style={{ textDecoration: todo.complete && "line-through" }}
    >
      <span onClick={() => handleComplete(todo.id)}>{todo.task}</span>
      {trashShown && (
        <Button
          size="xs"
          leftIcon={<BiTrash />}
          onClick={() => handleTrash(todo.id)}
        />
      )}
    </ListItem>
  );

  return listItem;
}
