import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
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
  const [completedList, setCompletedList] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault()
    if (todo) {
      // giving id, todo doesnt need key value as its same name (todo: todo)
      // giving isDone a value of false
      setList([...list, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return
    let add
    let active = list
    let complete = completedList

    if (source.droppableId === "TaskList") {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === "TaskList") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }
    setCompletedList(complete)
    setList(active)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <h1 className='heading'>pomodoro tasks</h1>
        <UserInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TaskList list={list} setList={setList}
          completedList={completedList} setCompletedList={setCompletedList} />
      </div>
    </DragDropContext>
  )
}

export default App;
