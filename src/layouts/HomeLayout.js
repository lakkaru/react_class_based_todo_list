import React, { Component } from "react";
import AddTodoLayout from "./homeLayout/AddTodoLayout";
import TodoListLayout from "./homeLayout/TodoListLayout";

export default class HomeLayout extends Component {
  state = {
    inputValue: "",
    todoList: [],
    isDisabled: true,
  };

  handleOnChange = (e) => {
    const inputValue = e.target.value;
    // console.log(inputValue);
    if (inputValue.trim().length) {
      this.setState({ inputValue: inputValue, isDisabled: false });
    } else {
      this.setState({ inputValue: "", isDisabled: true });
    }
  };

  handleAdd = () => {
    // console.log('add');
    const { todoList, inputValue } = this.state;
    this.setState({
      todoList: [...todoList, { title: inputValue, id: todoList.length + 1 }],
      inputValue: "",
      isDisabled: true,
    });
  };

  handleDelete = () => {
    // console.log('delete');
  };
  render() {
    const { todoList, inputValue, isDisabled } = this.state;
    const emptyList = !todoList.length;
    // const listColor=todoList.length?'teal':'tomato';
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <AddTodoLayout
          todoList={todoList}
          inputValue={inputValue}
          isDisabled={isDisabled}
          handleOnChange={this.handleOnChange}
          handleAdd={this.handleAdd}
        />
        <hr style={{width:'100vw'}}/>
        <p
          style={
            emptyList
              ? { color: "tomato", fontSize: "1.3rem" }
              : { color: "teal", fontSize: "1.3rem" }
          }
        >
          Todo List
        </p>

          {/* <p style={{color:listColor, fontSize:'1.3rem'}}>Todo List</p> */}
          <TodoListLayout
            todoList={todoList}
            handleDelete={this.handleDelete}
          />
        
      </div>
    );
  }
}
