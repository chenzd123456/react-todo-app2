import React from "react" // 导入React
import TodoList from "./TodoList" // 导入TodoList

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { id: 1, completed: false, text: "learn c++" },
                { id: 2, completed: false, text: "learn js" },
                { id: 3, completed: false, text: "learn java" },
            ]
        };
    }

    changeStatus(id, completed) {
        let { todoList } = this.state;
        let item = todoList.find((item) => (item.id === id));
        item.completed = completed;
        this.setState({ todoList });
    }

    render() {
        return (
            <div className="TodoApp">
                <TodoList todoList={this.state.todoList} onChange={this.changeStatus.bind(this)} ></TodoList>
            </div>
        )
    }
}

export default TodoApp;
