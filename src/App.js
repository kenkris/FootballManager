import React, { useState } from "react"
import Navbar from "./Navbar"
import MyTeam from "./MyTeam"
import { Route, Routes } from "react-router-dom"

import "./style/style.css"
import NewGame from "./NewGame"

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

    const [teams] = useState(teamsData)
    const [selectedTeam, setSelectedTeam] = useState({})

    function selectTeam(team) {
        console.log(team)
        setSelectedTeam(team)
    }

    return (
        <>
            <Navbar />
            <Routes>
                {/* Home goes to my team for now.
                Later on element will not be duplicated and sep. home view will be made */}
                <Route path="/" element={<MyTeam selectedTeam={selectedTeam}/>} />
                <Route path="/my-team" element={<MyTeam selectedTeam={selectedTeam} />} />
                <Route path="/new-game"element={<NewGame teams={teams} selectTeam={selectTeam} />} />
            </Routes>
        </>
    );
}

export default App;
