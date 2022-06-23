import React from "react" // 导入React
import TodoListItem from "./TodoListItem" // 导入TodoListItem组件

class TodoList extends React.Component {
    render() {
        const { todoList, onChange } = this.props;

        if (todoList.length > 0) {
            return (<div className="TodoList">
                <ul>
                    {
                        todoList.map(
                            (item) => (
                                <li key={item.id}>
                                    <TodoListItem
                                        id={item.id}
                                        completed={item.completed}
                                        onChange={onChange}
                                        text={item.text}
                                    />
                                </li>
                            )
                        )
                    }
                </ul>
            </div>);
        }
        else{
            <div className="TodoList">
                <p>no todo item</p>
            </div>
        }
    }
}

export default TodoList;