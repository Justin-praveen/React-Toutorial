import React, { MutableRefObject, useRef } from 'react'

const UseRef = () => {

    const h = useRef<any>("")


  return (
    <div>

        <input 
        
        ref={h}
        >
        
        </input>

        <button
        onClick={()=>{
            h.current.focus()
            console.log()

        }}
        >
            Click
        </button>
      
    </div>
  )
}

export default UseRef
