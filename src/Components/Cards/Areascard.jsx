import React from 'react'
import { Link } from 'react-router-dom'

export default function Areascard({ data }) {
  return (
    <div className="content">
      <h3>{data.strArea}</h3>
    </div>
  )
}
