import React from 'react'
import { Todo } from '../model'
interface Props{
    // list is an array of the type Todos (in model)
    list: Todo[]
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList = ({list, setList}: Props): JSX.Element =>  {
    const handleRemove = (i: number) => {
        let arr = [...list]
        arr.splice(i, 1)
        setList(arr)
    }
    return (
        <div>
            <h2>task list</h2>
            {list.map((item, index) => {
                return(
                    <div key={item.id}>
                        <h3>{item.todo}</h3>
                        <button onClick={() => handleRemove(index)}>remove</button>
                    </div>
                )
            })}
        </div>
    )
}
export default TaskList