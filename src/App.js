import React, { useState } from "react"
import TeamSelect from "./TeamSelect";

function App() {
  const teamsData = [
    { id: 1, name: "Vejle Boldklub" },
    { id: 2, name: "Borrusia Dortmund" },
    { id: 3, name: "Inter Milan" },
    { id: 4, name: "AC Milan" },
    { id: 5, name: "FC Barcalona" },
    { id: 6, name: "Manchester United" },
    { id: 7, name: "FC Bayern München" },
    { id: 8, name: "Liverpool FC" }
  ]

  const [teams, setTeams] = useState(teamsData)

  return (
    <>
      <h1>Football Manager</h1>
      <TeamSelect teams={teams} />
    </>
  );
}

export default App;
