import { useState } from "react"
import AddClass from "./components/AddClass"
import Header from "./components/Header"
import Hour from "./components/Hour"
import Classes from "./components/Classes"

function App() {
  const [classes, setClasses] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hour, setHour] = useState(30)

  const addClass = (e) => {
    e.preventDefault()
    if (name && duration && quantity) {
      setClasses([...classes, { name, duration, quantity }])
      setName("")
      setQuantity(0)
      setDuration(0)
    }
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 max-w-screen-sm mx-auto p-8">
        <Hour hour={hour} setHour={(e) => setHour(+e.currentTarget.value)} />

        <AddClass
          name={name}
          quantity={quantity}
          duration={duration}
          setName={(e) => setName(e.currentTarget.value)}
          setQuantity={(e) => setQuantity(+e.currentTarget.value)}
          setDuration={(e) => setDuration(+e.currentTarget.value)}
          handleSubmit={addClass}
        />

        <Classes classes={classes} hour={hour} />
      </main>
    </>
  )
}

export default App
