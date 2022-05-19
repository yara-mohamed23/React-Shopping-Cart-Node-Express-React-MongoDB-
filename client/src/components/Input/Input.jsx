import React from 'react'

 function Input(props) {
  return (
    <div>
         <div>
            <label htmlFor="">{props.label}</label>
            <input type={props.type} 
            required 
            name={props.name} 
            onChange={props.onChange} />
        </div>
    </div>
  )
}

export default Input