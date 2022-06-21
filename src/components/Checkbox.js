import React from "react" // 导入React

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
class Checkbox extends React.Component {
    /**
     * React的渲染函数
     * @returns 返回渲染好的HTML DOM
     */
    render() {
        const { checked, onChange, text } = this.props; // 注释1

        return (
            <div>
                <label>
                    <input type="checkbox" checked={checked} onChange={
                        (e) => (onChange(e.target.checked)) // 注释2
                    }></input>
                    {text}
                </label>
            </div>
        )
    }
}

export default Checkbox; //导出Checkbox

/*
 * 注释1
 *
 * 从props中取出 this.props.checked, this.props.onChange, this.props.text。
 * 
 * 其他写法 1:
 * class Checkbox extends React.Component {
 *     render() {
 *         const checked = this.props.checked;
 *         const onChange = this.props.onChange;
 *         const text = this.props.text;
 * 
 *         return (
 *             <div>
 *                 <label>
 *                     <input type="checkbox" checked={checked} onChange={
 *                         (e) => (onChange(e.target.checked)) // 注释2
 *                     }></input>
 *                     {text}
 *                 </label>
 *             </div>
 *         )
 *     }
 * }
 * 语法点：解构赋值
 */

/*
 * 注释2
 *
 * HTML的<input type="checkbox">标签的onchange事件的回调函数有一个参数，参数是事件event。
 * event.target.checked代表<input type="checkbox">是否勾选。
 * 这里不需要bind(this)是因为箭头函数可以闭包，this已经是绑定过的。
 * 
 * 其他写法 1:
 * class Checkbox extends React.Component {
 *     // 增加handleChange作为HTML的<input type="checkbox">标签的onchange事件的回调函数
 *     handleChange(event) {
 *         const onChange = this.props.onChange; // 从props传入的onChange函数, 赋值给变量onChange
 *         const checked = event.target.checked;
 *         onChange(checked); // 调用onChange（父组件从props传入的onChange函数），并把是否勾选传递做为参数传递给父组件。
 *     }
 * 
 *     render() {
 *         const { checked, text } = this.props;
 * 
 *         return (
 *             <div>
 *                 <label>
 *                     <input type="checkbox" checked={checked} onChange={
 *                         this.handleChange.bind(this) // 因为handleChange函数中使用了this.props，所以这里需要bind(this)。
 *                     }></input>
 *                     {text}
 *                 </label>
 *             </div>
 *         )
 *     }
 * }
 * 
 * 语法点：箭头函数，HTML的input标签
 */