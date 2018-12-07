import React, { Component } from "react";
import "./App.css";
import TodoTasks from "./components/TodoTasks";

class App extends Component {
  state = {
    count: 0
  };

  increaseTodo = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreaseTodo = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoTasks />
      </div>
    );
  }
}

export default App;

