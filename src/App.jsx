import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: '리액트 공부하기', body: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '리액트 공부하기', body: '리액트 기초를 공부해봅시다.', isDone: true },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleGhangeHandler = event => {
    setTitle(event.target.value);
  };

  const bodyGhangeHandler = event => {
    setBody(event.target.value);
  };

  // 추가 버튼 클릭
  const AddTodoHandler = () => {
    if (title !== '' && body !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        body: body,
        isDone: false,
      };

      setTodos([...todos, newTodo]);
    }
  };

  // 삭제 버튼 클릭
  const RemoveTodoHandler = id => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  };

  // 완료-취소 상태 전환
  const toggleTodoStatus = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const workingTodos = todos.filter(todo => !todo.isDone);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <div className='app-style'>
      <div className='title-style'>
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className='inputBox-style'>
        제목
        <input value={title} onChange={titleGhangeHandler}></input>
        내용
        <input value={body} onChange={bodyGhangeHandler}></input>
        <button
          onClick={() => {
            AddTodoHandler(setTitle(''), setBody(''));
          }}
        >
          추가하기
        </button>
      </div>
      <div className='working-style'>
        <h2 className='workingToggle'>Working..🔥</h2>
        <div className='todoBox-group'>
          {workingTodos.map(todo => {
            return (
              <div key={todo.id} className='todoBox-style'>
                <span className='todoTitle'>{todo.title}</span> <br />
                <span className='todoBody'>{todo.body}</span>
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
          })}
        </div>
      </div>
      <div className='done-style'>
        <h2>Done..!🎉</h2>
        <div className='todoBox-group'>
          {doneTodos.map(function (todo) {
            return (
              <div key={todo.id} className='todoBox-style'>
                <span className='todoTitle'>{todo.title}</span> <br />
                <span className='todoBody'>{todo.body}</span>
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
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
