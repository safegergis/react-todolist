import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { ListItem, IconButton } from "@chakra-ui/react";

export default function ListItems({ todo, handleTrash, handleComplete }) {
  const [trashShown, setTrashShown] = useState(false);

  const listItem = (
    <ListItem
      pr={1}
      complete={todo.complete}
      id={todo.id}
      onMouseEnter={() => setTrashShown(true)}
      onMouseLeave={() => setTrashShown(false)}
      style={{ textDecoration: todo.complete && "line-through" }}
    >
      <span onClick={() => handleComplete(todo.id)}>{todo.task}</span>
      {trashShown && (
        <IconButton
          variant="ghost"
          aria-label="trash"
          size="xs"
          icon={<BiTrash />}
        />
      )}
    </ListItem>
  );

  return listItem;
}
