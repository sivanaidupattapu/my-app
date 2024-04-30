import React, { useState } from "react";
function Todo() {
    var [todo, setTodo] = useState(['Siva', 'Sai Ram', 'Vinay'])
    console.log('Todo rerendered')
    var [x, setX] = useState()
    function add() {
        setTodo([...todo, x])
    }
    return <div className='border border-2 border-info m-2 p-2'>
        <h2>Todo-list Component</h2>
        <input type="text" name="" id="" onChange={(e) => setX(e.target.value)} />
        <span>{' '}</span>
        <button onClick={() => { add() }}>Add text</button>
        {
            todo.map(a => { return <li>{a}</li> })
        }
    </div>
}
export default React.memo(Todo)