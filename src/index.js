import ReactDOM from 'react-dom/client';
import Checkbox from "./components/Checkbox"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* 测试check={true}，测试text="checked" */}
    {/* 这里checked已经写死，所以点击也不能变化是否勾选。想要改变必须改变传递给checked的值*/}
    <Checkbox checked={true} text="checked"></Checkbox>

    {/* 测试check={false}，测试text="unchecked" */}
    {/* 这里checked已经写死，所以点击也不能变化是否勾选。想要改变必须改变传递给checked的值*/}
    <Checkbox checked={false} text="unchecked"></Checkbox>

    {/* 测试onChange弹出alert并检验checked参数，测试text="unchecked" */}
    {/* onChange 这里为了测试传递了一个箭头函数，实际工程中应该传递父组件的函数 */}
    {/* 这里checked没有传递值，Checkbox是否勾选由组件自身决定*/}
    <Checkbox onChange={(checked) => (alert("checked=" + checked))} text="click me"></Checkbox>
  </div>
);
