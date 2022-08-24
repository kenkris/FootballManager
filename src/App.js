import React, { useState } from "react"
import Navbar from "./Navbar"
import MyTeam from "./MyTeam"

import "./style/style.css"

function App() {

    // Home made routing for now - replace with react router
    let component;
    switch(window.location.pathname){
        case "/":
            component = <MyTeam />
            break;
        case "/my-team":
            component = <MyTeam />
            break;
    }

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
    const [selectedTeam, setSelectedTeam] = useState({})

    function selectTeam(team) {
        setSelectedTeam(team)
    }

    return (
        <>
            <Navbar />
            {component}
        </>
    );
}

export default App;
