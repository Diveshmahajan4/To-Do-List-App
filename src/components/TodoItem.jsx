import React from 'react'

export const TodoItem = (props) => {
  return (
    <div onClick={() => {
      props.onChecked(props.id);
    }}>
        <li>{props.text}</li>
    </div> 
  )
}
 