import { NextPage } from 'next'
import React from 'react'

export const Colophon: NextPage = () => {
  return (
    <div className="flex flex-col items-start min-h-[70vh]">
      <h1 className="text-4xl">Colophon</h1>
      <p>ingredients used to prepare this landscape</p>
    </div>
  )
}

export default Colophon
