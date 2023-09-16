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
        // newState: ''
    })
  }
  render() {
    let todos = this.state.todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ));
    return (
      <div>
        <ul>{todos}</ul>
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
