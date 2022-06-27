import React from "react" // 导入React
import TodoList from "./TodoList" // 导入TodoList
import InputBox from "./InputBox"

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
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

    changeInput(input) {
        this.setState({ input })
    }

    addTodo(input) {
        if (input !== "") {
            let todoList = this.state.todoList;
            todoList.push({
                id: todoList.length + 1,
                text: input,
                completed: false
            });
            this.setState({ todoList, input: "" });
        }
    }

    render() {
        return (
            <div className="TodoApp">
                <InputBox
                    value={this.state.input}
                    onChange={this.changeInput.bind(this)}
                    onEnterKeyUp={this.addTodo.bind(this)}>
                </InputBox>
                <TodoList
                    todoList={this.state.todoList}
                    onChange={this.changeStatus.bind(this)}>
                </TodoList>
            </div>
        )
    }
}

export default TodoApp;
