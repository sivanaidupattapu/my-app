import React, { useEffect, useRef, useState } from "react";
function Counter1() {
    var iref =useRef
    var [c, setC] = useState(0)
    function inc() {
        setC(c + 1)
    }
    function dec() {
        setC(c - 1)
    }
    function res() {
        setC(c = 0)
    }
    function inc5(){
        setC(oldvalue=>{return oldvalue+1})
        setC(oldvalue=>{return oldvalue+1})
        setC(oldvalue=>{return oldvalue+1})
        setC(oldvalue=>{return oldvalue+1})
        setC(oldvalue=>{return oldvalue+1})
    }
    useEffect(() => {
        console.log('Its Mounting')
    }, [])
    useEffect(() => {
        console.log('Rerendering')
    })
    return <div>
        <h2>Counter : {c}</h2>
        <button onClick={() => inc()}>Increment</button>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => res()}>Reset</button>
        <br />
        <button onClick={() => inc5()}>Increment 5</button>

    </div>
}
export default Counter1