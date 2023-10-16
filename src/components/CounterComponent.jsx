import { useCounter } from "../hooks/useCounter"
export const CounterComponent = (value = 0) => {
    const {counter, increment, decrement, reset} =  useCounter()
  return (
    <>
        <h2>Contador: {counter}</h2>
        <button className="btn btn-primary m-2" onClick={(()=> increment())}>+</button>
        <button className="btn btn-danger m-2" onClick={(()=> reset())}>Reset</button>
        <button className="btn btn-primary m-2" onClick={(()=> decrement(1,false))}>-</button>
    </>
  )
}
