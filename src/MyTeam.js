import React from 'react'

export default function MyTeam({selectedTeam}) {
    return (
        <>
            <div>
                <h1>My Team</h1>
                <p>{selectedTeam.name}</p>
            </div>
        </>
    )
}
