import { useState } from "react"

function InputValue () {
    const [inputValue, setInputValue] = useState()
    return(
        <>
            <input type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
        </>
    )
}