import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  render() {
    return (
      <TodoList
        render={(todos, handleRemoveItem) => {

          return <div>
            {todos.map((todo, index) => (
              <h3 key={index}>
                {todo}
                <button onClick={() => handleRemoveItem(index)}>
                  Remove from List
                </button>
              </h3>
            ))}
          </div>;
        }}
      />
    );
  }
}
