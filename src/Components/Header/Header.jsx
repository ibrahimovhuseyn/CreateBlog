import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='text-end'>
        <Link
        to="/create"
        className='btn btn-primary'
        >
        Create Blog
        </Link>
    </div>
  )
}

export default Header