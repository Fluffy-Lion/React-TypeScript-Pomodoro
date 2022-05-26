import React, { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import UserInput from './Components/UserInput';
import { Todo } from './model';
// Giving App the type of a Function Component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  // using the interface of todo, which has types
  // has to match those types when adding to this array
  const [list, setList] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault()
    if(todo){
      // giving id, todo doesnt need key value as its same name (todo: todo)
      // giving isDone a value of false
      setList([...list, { id: Date.now(),todo, isDone: false }])
      setTodo("")
    }
  }
  return (
    <div className='App'>
      <h1 className='heading'>pomodoro tasks</h1>
      <UserInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskList list={list} setList={setList}/>
    </div>
  )
}

export default App;
