import React, { useRef } from 'react'
import '../App.css'
// made interface to set the types
// ensuring that todo is a string and setTodo is 
// the react returned function to update
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}
const UserInput = ({ todo, setTodo, handleAdd }: Props): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }} className='input'>
            <input
            ref={inputRef}
                type="input"
                placeholder="enter task"
                className='input-element'
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button className='input-button' type='submit'>go</button>
        </form>
    )
}
export default UserInput