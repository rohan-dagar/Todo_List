import React from 'react'

const TodoItems = ({todo,onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <botton className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</botton>
    </div>
    <hr/>
    </>
  )
}

export default TodoItems
