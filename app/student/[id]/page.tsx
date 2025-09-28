import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <div>
      <h1>Student ID : {id}</h1>
      <hr />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, illo.</p>
    </div>
  )
}