import React from 'react'
import { Todo } from '../model'
import '../App.css'
import SingleTodo from './SingleTodo'
interface Props {
    // list is an array of the type Todos (in model)
    list: Todo[]
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList = ({ list, setList }: Props): JSX.Element => {

    return (
        <div className='list'>
            {list.map((item, index) => {
                return (
                    <SingleTodo key={item.id} item={item} list={list} setList={setList} />
                )
            })}
        </div>
    )
}
export default TaskList