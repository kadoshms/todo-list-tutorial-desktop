import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/todo-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-list-container">
            <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
