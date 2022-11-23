import { NextPage } from 'next'
import React from 'react'

export const About: NextPage = () => {
  return (
    <div className="flex flex-col items-start min-h-[70vh]">
      <h1 className="text-4xl">About</h1>
      <p>an introduction into my space</p>
    </div>
  )
}

export default About
