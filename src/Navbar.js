import React from 'react'

export default function Navbar() {
    return (
        <nav className="nav">
            <a className="site-title" href="/">Football Manager</a>
            <ul>
                <li>
                    <a href="/new-game">New game</a>
                </li>
                <li>
                    <a href="/my-team">My Team</a>
                </li>
            </ul>
        </nav>
    )
}
