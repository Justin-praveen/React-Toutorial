import React, { useCallback, useMemo, useState } from 'react'

const UseCallBack = () => {

    const [toggle,settoggle] = useState(false)


    const Huge :any = useCallback(
        () => {
            if(toggle) return( <button onClick={()=>{
                alert
                ("works...!")
            }}>works</button>)
            return (<></>)
        },
        [toggle]
    )
  return (
    <div>
        <div>{Huge}</div>
      <button 
      onClick={()=>{
        settoggle(!toggle)
      }}
      > Click</button>

    </div>
  )
}




export default UseCallBack
