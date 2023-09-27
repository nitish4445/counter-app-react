import {useState} from 'react';
import './App.css'
export const App = () => {
    
    const [count,setCount]=useState(0)
    function handleAdd(){
        setCount(count+1);
    }
    function handleSub(){
        setCount(count-1);
    }
    function handleReset(){
        setCount(0);
    }
  return (
   <>
     <div className='container'>
        <div className="contain">
            <p id='para'>{count}</p>
            <button onClick={handleAdd} id="add">Add</button>
            <button onClick={handleSub} id="sub">Sub</button>
            <button id='reset'onClick={handleReset}>Reset</button>
        </div>
     </div>
   </>
  )
}
