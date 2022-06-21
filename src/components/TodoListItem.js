import React from "react" // 导入React
import Checkbox from "./Checkbox"; //导入Checkbox组件
import "../assets/css/components.css"

/**
 * 组件TodoListItem
 * 
 * 使用Checkbox组件
 * props:
 *      id： 唯一id
 *      completed： 是否完成
 *      onChange：父组件传递的函数，当todo list item的完成状态发生变化时调用，一共两个参数，第一个参数是id，第二个参数是completed，用于向父组件传递是否完成。
 *      text：显示的标签文本
 */
class TodoListItem extends React.Component {
    /**
     * React的渲染函数
     * @returns 返回渲染好的HTML DOM
     */
    render() {
        const { id, completed, onChange, text } = this.props;

        return (
            <div className={"TodoListItem" + (completed ? " completed" : " active")}> {/* 注释1 */}
                <Checkbox
                    checked={completed}
                    onChange={(checked) => (onChange(id, checked))}
                    text={text}
                />
            </div>
        )
    }
}

export default TodoListItem;

/**
 * 注释1
 * 
 * 这里使用三目运算符 A ？B ：C 来判断TodoListItem是否显示成完成状态，根据完成状态拼接className。
 * 完成状态时className是"TodoListItem completed"。
 * 未完成状态时className是"TodoListItem active"。
 */