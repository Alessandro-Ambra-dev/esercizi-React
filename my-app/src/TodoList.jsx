import React from "react";

export class TodoList extends React.Component {
  state = {
    todos: ["Do React", "Present the project", "Do the human development"],
    newState: "",
  };

  handleInputChange = (event) => {
    const newTodoVal = event.target.value;
    const newTodoName = event.target.name;

    this.setState({
      [newTodoName]: newTodoVal,
    });
  };

  handlePushNewTodo = () => {
    let oldState = this.state.todos;
    let newState = this.state.newState;

    oldState.push(newState);

    this.setState({
      todos: this.state.todos,
      newState: "",
    });
  };
  handleRefreshState = () =>{
    this.setState({
        todos:[],
        newState: ''
    })
  }

  handleRemoveItem =(event)=>{

    const index = this.state.todos.indexOf("h3")

    const slice = this.state.todos.slice();

     slice.splice(index, 1)


    this.setState({
      todos: slice,
    })
    
  }
  render() {

    
    // let todos = this.state.todos.map((todo, index) => (
    //   <li  key={index}>{todo}<button onClick={this.handleRemoveItem}>Remove from List</button></li>
    // ));
    return (
      <div>
        {/* <ul>{todos}</ul> */}
        <div>{this.props.render(this.state.todos,this.handleRemoveItem)}</div>
        <input
          type="text"
          name="newState"
          onChange={this.handleInputChange}
          value={this.state.newState}
        />
        <button type="button" onClick={this.handlePushNewTodo}>
          {" "}
          Create New Todo
        </button>
        <button type="button" onClick={this.handleRefreshState}>Refresh The List</button>
      </div>
    );
  }
}
