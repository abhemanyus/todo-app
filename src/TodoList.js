function TodoList({list, markDone, deleteTodo}) {
  const listItems = list.map(
    ({id, todo, done}) => {
      return (
        <li className="card-header" key={id} style={{color: done ? "green" : "red"}}>
          <p>{todo}</p>
          <button onClick={() => markDone(id)} 
          style={{visibility: done ? "hidden": "visible"}}>Done</button>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
      );
    }
  );
  return (
    <ol className="todoList card card-body m-2">
      { listItems }
      <li className="card-header" style={{visibility: list.length ? "hidden": "visible"}}>Congratz, no ToDo's left!</li>
    </ol>
  );
}

export default TodoList;