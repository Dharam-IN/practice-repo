import React, { useReducer } from 'react'

const Hook1 = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return {...state, count: state.count + 1};
      
      case "DEC":
        return {...state, count: state.count - 1};
      
      case "TOG":
          return {...state, toggle: !state.toggle};
    
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    toggle: true
  });

  console.log(state)

  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => {dispatch({type: "INC"})}}>Add</button>
      <button onClick={() => {dispatch({type: "DEC"})}}>Remove</button>
      <button onClick={() => {dispatch({type: "TOG"})}}>Hide</button>
      <h3>{state.toggle ? "Show" : "Hide"}</h3>
    </>
  )
}

export default Hook1