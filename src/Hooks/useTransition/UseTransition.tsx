import React,{useEffect, useState, useTransition} from 'react'

const UseTransition = () => {

    const [pending,settransaction] = useTransition()
    const [value,setValue] = useState<string>()


    useEffect
    (()=>{
        if (pending) console.log("renders...!") 
    },[pending])


  return (
    <div>
        <input 
        onChange={(event)=>{
            setValue(event.target.value as string)
        }}
        >
                </input>
        <div>
            {
                pending ? "Loading..!" : value
            }
            </div>
        <button onClick={()=>{
              settransaction(()=>{
                return 
              })
        }}> 
            click
        </button>
      
    </div>
  )
}

export default UseTransition
