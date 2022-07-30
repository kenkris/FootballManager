import React from 'react'

export default function TeamListItem({team}) {
  return (
    <div>
        <label>
            <input type="radio" name="selected_team"/>
            {team.name}
        </label>
    </div>
  )
}
