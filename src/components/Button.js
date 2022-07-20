import React from "react" // 导入React

class Button extends React.Component {
    getClassName() {
        const {actived, disabled} = this.props;
        let class_name = "Button";

        if (actived) {
            class_name += " Actived";
        }

        if (disabled) {
            class_name += " Disabled";
        }
        return class_name;
    }

    render() {
        const {disabled, onClick, text} = this.props;

        return (
            <button className={
                    this.getClassName()
                }
                type="button"
                disabled={disabled}
                onClick={onClick}>
                {text}</button>
        )
    }
}

export default Button;
