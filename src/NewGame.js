import React from "react"
import TeamSelect from "./TeamSelect"

export default function NewGame({ teams, selectTeam }) {
    return (
        <>
            <TeamSelect teams={teams} selectTeam={selectTeam} />
        </>
    )
}
