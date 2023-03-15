import React from "react";
import { Tabs, TabList, Tab, IconButton } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
function ListTab({callBackList, listTypes, callBackListTypes, callBackTodoList, todoList}) {
  const handleTrash = (id) => {
    if (listTypes.length > 1) {
      let list = listTypes.filter((types) => types.id !== id)
      callBackListTypes(list)
      let todo = todoList.filter((todos) => todos.list !== id)
      callBackTodoList(todo)
    } else (alert("You must have at least one list"))
    
};
  const tabs = listTypes.map((lists) => <Tab onClick={() => callBackList(lists.id)}>{lists.name} <IconButton onClick={() => handleTrash(lists.id)} p={0} variant="ghost" icon={<BiTrash  />}/></Tab>);
  return (
    <Tabs variant="enclosed">
      <TabList>{tabs}</TabList>
    </Tabs>
  );
}

export default ListTab;
