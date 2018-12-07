import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


export default class TodoTasks extends React.Component {
    state = {
        todos: [],
        todoToShow: "all"
    };

    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
    };


    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    };



    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        onDelete={() => this.handleDeleteTodo(todo.id)}
                        todo={todo}
                    />
                ))}
                <div>
                    todos left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                    <button onClick={() => this.updateTodoToShow("all")}>all</button>
                    <button onClick={() => this.updateTodoToShow("active")}>
                        active
                    </button>
                    <button onClick={() => this.updateTodoToShow("complete")}>
                        complete
                    </button>
                </div>
            </div>
        );
    }
}