import React from 'react'
import "./button.scss"


const Button = ({children, ...props}) => {
  return (
    <button className='btn' {...props} >{children}</button>
  )
}

export default Button