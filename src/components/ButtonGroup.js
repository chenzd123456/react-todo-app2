import React from "react" // 导入React
import Button from "./Button"

class ButtonGroup extends React.Component {
    render() {
        const {key_values, selected, onChange} = this.props;
        return (
            <div className="ButtonGroup">
                {
                key_values.map((item) => (
                    <Button text={
                            item.text
                        }
                        actived={
                            selected === item.key
                        }
                        onClick={
                            () => (onChange(item.value))
                    }></Button>
                ))
            } </div>
        )
    }
}

export default ButtonGroup;
