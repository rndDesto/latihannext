import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

const Heading = ({title}) => {
  return (
    <div className={style.root}>
        {title}
    </div>
  )
}

export default Heading