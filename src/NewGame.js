import React from "react"
import TeamSelect from "./TeamSelect"

export default function NewGame({ teams, selectTeam }) {
    return (
        <>
            <h1>New game</h1>
            <TeamSelect teams={teams} selectTeam={selectTeam} />
        </>
    )
}
