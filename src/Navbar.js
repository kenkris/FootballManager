import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link className="site-title" to="/">Football Manager</Link>
            <ul>
                <li>
                    <Link to="/new-game">New game</Link>
                </li>
                <li>
                    <Link to="/my-team">My Team</Link>
                </li>
            </ul>
        </nav>
    )
}
