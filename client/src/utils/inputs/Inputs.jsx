import React from 'react'
import './inputs.scss'

export default function Inputs(props) {
  return (
    <input 
    onChange={(event) => props.setValue(event.target.value) } 
    value={props.value}  
    type={props.type} 
    placeholder={props.placeholder}/>
  )
}
