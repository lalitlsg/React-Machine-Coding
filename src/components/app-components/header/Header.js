import React from 'react'
import style from './header.module.css'

const Header = ({text}) => {
  return (
    <h3 className={style.header}>{text}</h3>
  )
}

export default Header