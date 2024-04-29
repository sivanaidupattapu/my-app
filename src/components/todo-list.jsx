import React, { useRef, useState } from "react";
function Todo() {
    var [todo, setTodo] = useState([])
    let iref = useRef()
    function txt() {
        let obj = { 'Name': iref.current.value, 'Status': false }
        setTodo([...todo, obj])
        console.log(todo)
    }
    function d1(i) {
        // className='text text-success'
        todo[i].Status = true
        setTodo([...todo])
    }
    function d2(i) {
        todo[i].Status = false
        setTodo([...todo])
    }
    console.log(todo);
    return <div>
        <input type="text" ref={iref} />  
        <span>{' '}</span>
        <button onClick={() => txt()}>Add Text</button>
        {
            todo.map((a, i) => {
                return <li >{a.Name}
                    {!a.Status && <span>
                        <button onClick={() => { d1(i) }}>Done</button>
                        <button onClick={() => { }}>Edit</button>
                    </span>}
                    {a.Status && <span>
                        <button onClick={() => { d2(i) }}>undo</button>
                        <button onClick={() => { }}>Delete</button>
                    </span>}
                </li>
            })
        }
    </div>
}
export default Todo