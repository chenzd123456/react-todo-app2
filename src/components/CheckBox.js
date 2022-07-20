import React from "react"
// 导入React

/**
 * Checkbox组件
 * 
 * 使用HTML的<input type="checkbox">标签和<label>标签
 * 
 * props:
 *      checked： 是否勾选
 *      onChange： 点击时调用回调
 *      text： 显示的标签文本
 * 
 * TODO: 添加CSS样式
 */
class CheckBox extends React.Component { // 增加handleChange作为HTML的<input type="checkbox">标签的onchange事件的回调函数
    handleChange(event) {
        const onChange = this.props.onChange; // 从props取出onChange函数, 赋值给变量onChange
        const checked = event.target.checked;
        onChange(checked); // 调用onChange（父组件从props传入的onChange函数），并把是否勾选传递做为参数传递给父组件。
    }

    render() {
        const checked = this.props.checked; // 从props取出checked, 赋值给变量checked
        const text = this.props.text;
        // 从props取出text, 赋值给变量text

        /**
         * 可以使用ES6的解构赋值，写成:
         * const {checked,text} = this.props;
         */

        return (
            <div>
                <label>
                    <input type="checkbox"
                        checked={checked}
                        onChange={
                            this.handleChange.bind(this) // 因为handleChange函数中使用了this.props，所以这里需要bind(this)。
                    }></input>
                    {text} </label>
            </div>
        )
    }
}

export default CheckBox;
// 导出Checkbox

/*
 * 其他写法 1:
 *
 * 语法点：箭头函数，HTML的input标签
 * 
 * class CheckBox extends React.Component {
 *      render() {
 *         const { checked, onChange, text } = this.props;
 *         return (
 *             <div className="CheckBox">
 *                 <label>
 *                     <input
 *                         type="checkbox"
 *                         checked={checked}
 *                         onChange={(event) => (onChange(event.target.checked))}
 *                     />
 *                     {text}
 *                 </label>
 *          </div>
 *      )
 *  }
 * 
 * 
 */
