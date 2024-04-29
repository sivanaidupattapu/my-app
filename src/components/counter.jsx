import React, { useEffect, useState } from "react";
function Counter() {
    var [x, setX] = useState(0)
    function inc() {
        setX(x + 1)
    }
    function dec() {
        setX(x - 1)
    }
    function res() {
        x = 0;
        setX(x)
    }
    function inc5() {
        setX((olv) => { return (olv + 1) })
        setX((olv) => { return (olv + 1) })
        setX((olv) => { return (olv + 1) })
        setX((olv) => { return (olv + 1) })
        setX((olv) => { return (olv + 1) })
    }
    useEffect(() => {
        console.log('its Mounting')
    }, []);
    useEffect(() => {
        console.log('Every time updating value')
    });
    return <div >
        <h1>Counter:{x}</h1>
        <button onClick={() => inc()}>Increment</button>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => res()}>Reset</button> <br /> <br />
        <button onClick={() => inc5()}>Increment 5</button>
    </div>
}
export default Counter