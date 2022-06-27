import React from "react" // 导入React
import { KEY_RETURN } from 'keycode-js';

class InputBox extends React.Component {
    handleKeyUp(event) {
        const { onEnterKeyUp, value } = this.props

        if (event.keyCode === KEY_RETURN) {
            onEnterKeyUp(value);
        }
    }

    handleChange(event) {
        const { onChange } = this.props;
        onChange(event.target.value);
    }

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