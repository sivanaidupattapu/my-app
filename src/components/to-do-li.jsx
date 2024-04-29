import React, { useRef, useState } from "react";
function Todos() {
    var iref = useRef()
    var [todo, setTodo] = useState([])

    function txt() {
        var obj = { 'name': iref.current.value, 'status': false }
        setTodo([...todo, obj])
        iref.current.value = ''
    }
    function done(i) {
        todo[i].status = true;
        setTodo([...todo])
    }
    function undo(i) {
        todo[i].status = false
        setTodo([...todo])
    }
    function edit() {

    }
    function del(i) {
        todo.splice(i, 1)
        setTodo([...todo])
    }
    return <div>
        <input type="text" name="" id="" ref={iref} />
        <span>{' '}</span>
        <button style={{marginBottom:'10px'}} onClick={() => txt()} className='border-1 border-info'>Add Text</button>
        {
            todo.map((a, i) => {
                return <li style={{marginBottom:'10px'}}>
                    <span>{(a.status === false) ? <span>{a.name}</span> : <strike className='text text-danger'>{a.name}</strike>}</span>
                    {!a.status && <span>
                        <button onClick={() => done(i)} className='border-0 bg-primary text-white'>Done</button>
                        <span>{' '}</span>
                        <button onClick={() => edit(i)} className='border-0 bg-primary text-white'>Edit</button>
                    </span>}
                    {a.status && <span>
                        <button onClick={() => undo(i)} className='border-0 bg-warning text-white'>undo</button>
                        <span>{' '}</span>
                        <button onClick={() => del(i)} className='border-0 bg-danger text-white'>delete</button>
                    </span>}
                </li>
            })
        }
    </div>
}
export default Todos