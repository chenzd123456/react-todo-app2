import React from "react" // 导入React
import { KEY_RETURN } from 'keycode-js';

class InputBox extends React.Component {
    /**
     * 处理按键抬起的事件
     * @param {*} event 事件
     */
    handleKeyUp(event) {
        const { onEnterKeyUp, value } = this.props

        if (event.keyCode === KEY_RETURN) {
            onEnterKeyUp(value);
        }
    }

    /**
     * 处理<input type="text">标签输入内容改变的事件
     * @param {*} event 
     */
    handleChange(event) {
        const { onChange } = this.props;
        onChange(event.target.value);
    }

    /**
     * 渲染函数
     * @returns 
     */
    render() {
        const { value } = this.props;
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    value={value}>
                </input>
            </div>
        );
    }
}

export default InputBox;