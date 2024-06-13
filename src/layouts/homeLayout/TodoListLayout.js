import React, { Component } from "react";
import SingleTodo from "../../components/todoList/SingleTodo";

export default class TodoListLayout extends Component {
  render() {
    const { todoList, handleDelete } = this.props;
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'start'}}>
        {todoList.map((val, key) => {
          const { title, id } = val;
          return (
            <SingleTodo
              key={key}
              id={id}
              todo={title}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    );
  }
}
