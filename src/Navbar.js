import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav">
        <a className="site-title">Football Manager</a>
        <ul>
            <li><a className="active">New game</a></li>
            <li><a>My Team</a></li>
        </ul>
    </nav>
  )
}
