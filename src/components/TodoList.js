import React from "react";
import ListItems from "./ListItem";

export default function TodoList({ todoList, callBackList, listType }) {
  const handleTrash = (id) => {
    let list = todoList.filter((todo) => todo.id !== id);
    callBackList(list);
  };
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    callBackList(list);
  };

  const listItems = todoList.filter((todo) => todo.list == listType)
                            .map((todo) => (
    <ListItems
      todo={todo}
      handleTrash={handleTrash}
      handleComplete={handleComplete}
    />
  ));
  return <>{listItems}</>;
}
