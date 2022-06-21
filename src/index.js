import ReactDOM from 'react-dom/client'; // 导入 ReactDOM
import Checkbox from "./components/Checkbox" // 导入Checkbox组件
import TodoListItem from './components/TodoListItem'; // 导入TodoListItem组件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> {/* 必须是一个根DOM节点 */}
    测试Checkbox:
    {/* 测试check={true}，测试text="checked" */}
    {/* 这里checked已经写死，所以点击也不能变化是否勾选。想要改变必须改变传递给checked的值*/}
    <Checkbox
      checked={true}
      onChange={(checked) => (alert("checked=" + checked))}
      text="checked" />

    {/* 测试check={false}，测试text="unchecked" */}
    {/* 这里checked已经写死，所以点击也不能变化是否勾选。想要改变必须改变传递给checked的值*/}
    <Checkbox
      checked={false}
      onChange={(checked) => (alert("checked=" + checked))}
      text="unchecked" />

    <br />

    测试TodoListItem:
    <TodoListItem
      id={1}
      isCompleted={true}
      onChange={(id, isCompleted) => (alert("id=" + id + " isCompleted=" + isCompleted))}
      text="completed" />

    <TodoListItem
      id={1}
      isCompleted={false}
      onChange={(id, isCompleted) => (alert("id=" + id + " isCompleted=" + isCompleted))}
      text="active" />
  </div>
);
