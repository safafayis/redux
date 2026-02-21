import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../Redux/TodoSlice"

const Todo = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addHandler = () => {
    if (!text.trim()) return;
    dispatch(addTodo({ id: Date.now(), text }));
    setText("");
  }; 

   const saveHandler = (id) => {
    if (!editText.trim()) return;
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h2>Redux Toolkit Todo App</h2> 

      <input value={text} onChange={(e) => setText(e.target.value)}  placeholder="Add todo" />
      <button onClick={addHandler}>Add</button>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)}/>
                <button onClick={() => saveHandler(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => { setEditId(todo.id); setEditText(todo.text);}} >Edit </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}> delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

