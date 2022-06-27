import React from "react" // 导入React
import TodoListItem from "./TodoListItem" // 导入TodoListItem组件

class TodoList extends React.Component {
    /**
     * 渲染函数
     * @returns 
     */
    render() {
        const { todoList, onChange } = this.props; // 从props中取出todoList, onChange

        if (todoList.length > 0) { // 当从props中传入的todoList的长度大于0的时候
            return (<div className="TodoList">
                <ul>
                    {
                        todoList.map( // React的列表渲染使用list的map函数遍历list并返回列表元素渲染的jsx
                            (item) => ( // item是list中的元素
                                <li key={item.id}> {/* 为了不渲染的时候顺序与list中不一致，需要设置key属性 */}
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
        else {  // 当从props中传入的todoList的长度小于0的时候
            <div className="TodoList">
                <p>no todo item</p> {/** 显示没有项目 */}
            </div>
        }
    }
}

export default TodoList;