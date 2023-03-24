import React, { useReducer } from 'react'

const Usereducer = () => {

    const reduces = (state:any,actions:any)=>{

        switch(actions.range){
            case "add" :
                
                return {
                    name : state.name + "Chan"
                }
            case "sub":
                return{
                    name : actions.nameby
                }
        }
        
    }

    const [red,setred] = useReducer(reduces,{name : "jackie"})
  return (
    <div>

        <div>{red?.name}</div>
      <button
      onClick={()=>{

        setred({
            range : "add",
        })

      }}
      >Click</button>
           <button
      onClick={()=>{

        setred({
            range : "sub",
            nameby : "jackie"
        })

      }}
      >Click</button>
    </div>
  )
}

export default Usereducer
