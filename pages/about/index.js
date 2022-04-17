import React from 'react'
import Link from 'next/link'
import Button from 'elements/Button'
import Heading from '@/elements/Heading'

const about = () => {
  return (
    <>
    <Heading title='About Page'/>
    <Link href="/">back to home</Link>
    <Button />
    </>
  )
}

export default about