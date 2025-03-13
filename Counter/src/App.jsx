import { useState } from "react";


function App(){
    let [num , setNum] = useState(0)
    function increment(){
        setNum(num + 1)
        console.log(num);
    }
    function decrement(){
        if(num <= 0 ){
            alert('NOT POSSIBLE ❗❗')
        }else{
            setNum(num - 1);
            console.log(num);
        }
    }
    return(
        <>
        <div><h1>COUNTER APP</h1></div>
        <div style={
            {display: 'flex',
            justifyContent: "space-around",
            fontFamily: 'revert-layer'
            }}>
                <button onClick={decrement}>-</button>
                <p>{num}</p>
                <button onClick={increment}>+</button>
        </div>
        </>
    )
}

export default App