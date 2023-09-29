import React, {useState, useEffect} from 'react'

function Counter() {

  const [counter, setCount] = useState(0)

  return (
    <div className='container'>
        <div className="circle">
            {counter}
        </div> 
        <div className='btns'>
            <button onClick={() => setCount(counter != 0 ? counter - 1 : counter = 0)}>-</button>
            <button onClick={() => setCount(0) }>Restart</button>
            <button onClick={() => setCount(counter + 1)}>+</button>
        </div>
    </div>
  )
}

export default Counter