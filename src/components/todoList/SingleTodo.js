import React, { Component } from "react";

export default class SingleTodo extends Component {
  state = {
    checked: false,
  };

  checkState = (e) => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    const { todo, no, handleDelete } = this.props;
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
        <p style={{margin:"0"}}>
          <span style={{ }}>{no}</span>
          {todo}
        </p>
        <button style={{}} onClick={()=>{handleDelete()}}>Delete</button>
      </div>
    );
  }
}
