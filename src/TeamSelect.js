import React from 'react'
import TeamListItem from './TeamListItem'

export default function TeamSelect({teams}) {
  return (
    <div>TeamSelect
        {teams.map(team => {
            return <TeamListItem key={team.id} team={team}/>
        })}
    </div>
  )
}
