import React, { useState } from 'react';
import styled from 'styled-components';
import { BiTrash } from 'react-icons/bi'

const LIST = styled.li`
  text-decoration: "line-through";
  text-align: left;
  cursor: default;
`;

export default function List({todoList, callBackList}) {
    const [trashShown, setTrashShown] = useState(false)
    
    const handleTrash = (id) => {
        let list = todoList.filter((todo) => todo.id !== id)
        callBackList(list);
    }
    const handleComplete = (id) => {
        let list = todoList.map((task) => {
          let item = {};
          if (task.id === id) {
            item = {...task, complete: !task.complete};
            } else item = {...task};
            return item;
          });
          callBackList(list);
        };

    const listItems = todoList.map(todo =>   
        <LIST
          complete={todo.complete}
          id={todo.id}
          //onClick = {() => handleComplete(todo.id)}
          onMouseEnter={() => setTrashShown(true)}
          onMouseLeave={() => setTrashShown(false)}
          style = {{textDecoration: todo.complete && "line-through"}}
          >
            <div >{todo.task} {trashShown && (<button onClick={() => handleTrash(todo.id)}><BiTrash /></button>)}</div>
          </LIST> 
    );
    return <ul style={{
        display:'inline-block',
        textAlign: 'center',
        listStyle: 'circle'
        }}> {listItems}</ul>
}