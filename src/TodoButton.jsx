function TodoButton({ todo, RemoveTodoHandler, toggleTodoStatus }) {
  return (
    <div key={todo.id} className='todoBox-style'>
      <h2 className='todoTitle'>{todo.title}</h2>
      <p className='todoBody'>{todo.body}</p>
      <div className='buttons'>
        <button
          className='deleteButton'
          onClick={() => {
            RemoveTodoHandler(todo.id);
          }}
        >
          삭제하기
        </button>
        <button className='doneButton' onClick={() => toggleTodoStatus(todo.id)}>
          {todo.isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  );
}

export default TodoButton;
