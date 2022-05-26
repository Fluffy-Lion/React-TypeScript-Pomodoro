import React from 'react'
import { Todo } from '../model'
import '../App.css'
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd'
interface Props {
    // list is an array of the type Todos (in model)
    list: Todo[]
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
    completedList: Todo[]
    setCompletedList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList: React.FC<Props> = ({ list, setList, completedList, setCompletedList }) => {

    return (
        <div className='container'>
            <Droppable droppableId='TaskList'>
                {
                    (provided) => (
                        <div className='list' ref={provided.innerRef} {...provided.droppableProps}>
                            <span>active</span>
                            {list.map((item, index) => (
                                <SingleTodo
                                    index={index}
                                    key={item.id}
                                    list={list}
                                    setList={setList}
                                    item={item}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='CompletedTasks'>
                {
                    (provided) => (
                        <div className='list remove' ref={provided.innerRef} {...provided.droppableProps}>
                            <span>completed tasks</span>
                            {completedList.map((item, index) => (
                                <SingleTodo
                                    index={index}
                                    key={item.id}
                                    list={completedList}
                                    setList={setCompletedList}
                                    item={item}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}
export default TaskList