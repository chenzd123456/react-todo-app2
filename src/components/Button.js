import React from "react" // 导入React

class Button extends React.Component {
    getClassName() {
        let class_name = "Button";
        const { disabled } = this.props;
        if (disabled) {
            class_name += " Disabled";
        }
        return class_name;
    }

    render() {
        const { disabled, onClick, text } = this.props;

        return (
            <button className={this.getClassName()} type="button" disabled={disabled} onClick={onClick}>{text}</button>
        )
    }
}

export default Button;