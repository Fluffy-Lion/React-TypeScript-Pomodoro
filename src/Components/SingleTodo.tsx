import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone, MdRemoveDone } from 'react-icons/md'
import { Todo } from '../model'
type Props = {
    index: number
    item: Todo
    list: Todo[]
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ item, list, setList, index }: Props): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editItem, setEditItem] = useState<string>(item.todo)
    const handleDone = (id: number) => {
        // let arr = [...list]
        // arr.splice(id, 1)
        // setList(arr)
        setList(list.map((item) => item.id === id ? { ...item, isDone: !item.isDone } : item))
    }

    const handleDelete = (id: number) => {
        // creating a new array with all the items that dont have the 
        // id of what we passed it
        setList(list.filter((item) => item.id !== id))
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setList(list.map((item) => (
            item.id === id ? { ...item, todo: editItem } : item
        )))
        setEdit(false)
    }
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        // when edit change it will focus on the input 
        // saves us clicking
        inputRef.current?.focus()
    }, [edit])
    return (
        <Draggable draggableId={item.id.toString()} index={index}>
            {(provided) => (
                <form
                    className='single-todo'
                    onSubmit={(e) => handleEdit(e, item.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ?
                        <input
                            ref={inputRef}
                            value={editItem}
                            onChange={(e) => setEditItem(e.target.value)}
                            className="todo-item-text"
                        /> :
                        item.isDone ?
                            <s className='todo-item-text' >
                                {item.todo}
                            </s>
                            :
                            <span className='todo-item-text'>
                                {item.todo}
                            </span>
                    }
                    <div>
                        <span className='react-icons'
                            onClick={() => {
                                if (!edit && !item.isDone) {
                                    setEdit(!edit)
                                }
                            }
                            }
                        >
                            <AiFillEdit />
                        </span>
                        <span className='react-icons'
                            onClick={() => handleDelete(item.id)}
                        >
                            <AiFillDelete />
                        </span>
                        <span className='react-icons'
                            onClick={() => handleDone(item.id)}>
                            {item.isDone ?
                                <MdRemoveDone />
                                :
                                <MdDone />
                            }
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    )
}
export default SingleTodo