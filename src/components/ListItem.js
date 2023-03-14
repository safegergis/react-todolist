import React, { useState } from 'react';
import styled from 'styled-components';
import { BiTrash } from 'react-icons/bi'

export const LIST = styled.li`
  padding-left: 0;
  text-decoration: "line-through";
  text-align: left;
  cursor: default;
`;

export default function ListItems({todo,handleTrash,handleComplete}) {
    const [trashShown, setTrashShown] = useState(false)

    return (
    <LIST
          complete={todo.complete}
          id={todo.id}
          
          onMouseEnter={() => setTrashShown(true)}
          onMouseLeave={() => setTrashShown(false)}
          style = {{textDecoration: todo.complete && "line-through"}}
          >
            <span
            onClick = {() => handleComplete(todo.id)}
            >{todo.task}
            </span> 
            {trashShown && (<button onClick={() => handleTrash(todo.id)}><BiTrash /></button>)}
          </LIST>
    )
}