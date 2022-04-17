import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

const Button = () => {
  return (
    <div className={style.root}>
        <Link href={'/'}>home</Link>
    </div>
  )
}

export default Button