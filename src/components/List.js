import React, { useState } from 'react';
import styled from 'styled-components';

const LIST = styled.li`
  text-decoration: "line-through";
  text-align: left;
  cursor: default;
`;

export default function List({todoList, callBackList}) {
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
          onClick = {() => handleComplete(todo.id)}
          style = {{textDecoration: todo.complete && "line-through"}}
          >
            {todo.task}
          </LIST>
    );
    return <ul style={{
        display:'inline-block',
        textAlign: 'center',
        listStyle: 'circle'
        }}> {listItems}</ul>
}