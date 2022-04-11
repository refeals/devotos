import React, { useState } from "react"

import "./css/App.css"

import logo from "./img/logo.jpg"

const App = () => {
  const [names, setNames] = useState(
    Array(10)
      .fill("")
      .map((item, i) => `${i + 1} - `),
  )

  const shuffle = (originalArray: Array<string>) => {
    const array = [...originalArray]
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let arr = [...names]
    arr[i] = e.target.value
    setNames(arr)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setNames(shuffle(names))
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo Devotos da bola" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <div className="input-column">
            {names.slice(0, 5).map((n, i) => (
              <input
                value={n}
                onChange={(e) => handleChange(e, i)}
                type="text"
              />
            ))}
          </div>
          <div className="input-column">
            {names.slice(5).map((n, i) => (
              <input
                value={n}
                onChange={(e) => handleChange(e, i + 5)}
                type="text"
              />
            ))}
          </div>
        </div>
        <button type="submit">Randomizar</button>
      </form>
    </div>
  )
}

export default App
