import React from 'react'

export default function TeamListItem({team, selectTeam}) {

  function handleSelectTeam(){
      selectTeam(team)
  }

  return (
    <div>
        <label>
            <input type="radio" name="selected_team" onChange={handleSelectTeam}/>
            {team.name}
        </label>
    </div>
  )
}
