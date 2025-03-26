import React, { useState } from "react"
import Search from "./components/search"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Encontre <span className="text-gradient">filmes</span> que você vai
            gostar sem complicações
          </h1>
        </header>

        <search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App
