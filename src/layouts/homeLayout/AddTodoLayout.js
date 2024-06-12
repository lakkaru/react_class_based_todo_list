import React, { Component } from "react";

export default class AddTodoLayout extends Component {
  state = {
    // inputValue: "",
    // isDisabled: true,
    visibility: "hidden",
    // todoList:[],
  };


  

  render() {
    const {handleOnChange, handleAdd, isDisabled, inputValue}=this.props;
    const {  visibility } = this.state;
    return (
      <div style={{ marginBottom: "20px", fontWeight: "500" }}>
        <input
        value={inputValue}
          type="text"
          onChange={(e) => {
            handleOnChange(e);
          }}
          placeholder="Please add your todo"
        />
        <button disabled={isDisabled} style={{ marginLeft: "20px", fontWeight:"500"}} onClick={()=>{handleAdd()}}>
          Add
        </button>
        <p
          style={{
            visibility: visibility,
            color: "tomato",
            fontWeight: "500px",
          }}
        >
          Please enter you todo.
        </p>
      </div>
    );
  }
}
