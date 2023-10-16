import { useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter +1)
    }
    const decrement = (val, negative) =>{
        if(!negative && counter - val < 0){
            setCounter(0)
            return
        }
        setCounter(counter -1)
    }
    const reset = () =>{
        setCounter(0)
    }
  return {
    counter,
    increment,
    decrement,
    reset
    }

}
