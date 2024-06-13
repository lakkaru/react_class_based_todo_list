import React, { Component } from "react";

export default class SingleTodo extends Component {
  state = {
    checked: false,
  };

  checkState = (e) => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    const { todo, id, handleDelete } = this.props;
    const { checked } = this.state;
    return (
      <div style={{ display: "flex", justifyContent:'space-between', marginBottom:'1rem', width:'350px' }}>
        <input
          type="checkBox"
          checked={checked}
          onChange={(e) => {
            this.checkState(e);
          }}
        />
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <span style={{marginRight:'20px' }}>{id}</span>
        <p style={{margin:"0"}}>
          
          {todo}
        </p></div>
        <button style={{color:'tomato', fontWeight:'bold'}} onClick={()=>{handleDelete(id)}}>Delete</button>
      </div>
    );
  }
}
