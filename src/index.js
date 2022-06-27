import ReactDOM from 'react-dom/client'; // 导入 ReactDOM
import CheckBox from "./components/CheckBox" // 导入Checkbox组件
import TodoListItem from './components/TodoListItem'; // 导入TodoListItem组件
import TodoList from './components/TodoList'; // 导入TodoList组件
import TodoApp from './components/TodoApp';
import InputBox from './components/InputBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> {/* 必须是一个根DOM节点 */}
    测试Checkbox:
    {/* 测试check={true}，测试text="checked" */}
    {/* 这里checked已经写死，所以点击也不能变化是否勾选。想要改变必须改变传递给checked的值*/}
    <CheckBox
      checked={true}
      onChange={(checked) => (alert("checked=" + checked))}
      text="checked" />

    {/* 测试check={false}，测试text="unchecked" */}
    {/* 这里checked已经写死，所以点击也不能变化是否勾选。想要改变必须改变传递给checked的值*/}
    <CheckBox
      checked={false}
      onChange={(checked) => (alert("checked=" + checked))}
      text="unchecked" />

    <br />

    测试TodoListItem:
    <TodoListItem
      id={1}
      completed={true}
      onChange={(id, completed) => (alert("id=" + id + " completed=" + completed))}
      text="completed" />

    <TodoListItem
      id={1}
      completed={false}
      onChange={(id, completed) => (alert("id=" + id + " completed=" + completed))}
      text="active" />

    <br />

    测试TodoList:
    <TodoList
      todoList={[{ id: 1, completed: true, text: "read" }, { id: 2, completed: false, text: "draw" }, { id: 3, completed: false, text: "play" }]}
      onChange={(id, completed) => (alert("id=" + id + " completed=" + completed))}
    />

    <br />

    测试InputBox:
    <InputBox onChange={(value) => (alert("value=" + value))}></InputBox>
    <InputBox onEnterKeyUp={(value) => (alert("value=" + value))} onChange={(value) => { }} value="add todo"></InputBox>

    <br />

    测试TodoApp:
    <TodoApp></TodoApp>


  </div>
);
