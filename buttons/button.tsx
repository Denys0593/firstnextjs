import Link from 'next/link'
import React from 'react'
import style from './button.module.css'

const Button = () => {
  return (
    <button className={style.butt}>
        <Link className={style.link} href='/about'>
            Close
        </Link>
    </button>
  )
}

export default Button