import { useState } from "react"

import { AddClass } from "./components/AddClass"
import { Header } from "./components/Header"
import { Hour } from "./components/Hour"
import { Classes } from "./components/Classes"

import { useLocalStorage } from "@uidotdev/usehooks"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { classAdded, classNotAdded } from "./toastify"

export function App() {
  const [classes, setClasses] = useLocalStorage("TS_CLASSES", [])
  const [hour, setHour] = useLocalStorage("TS_HOUR", 30)

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [duration, setDuration] = useState(0)

  const addClass = (e) => {
    e.preventDefault()
    if (name && duration && quantity) {
      setClasses([...classes, { name, duration, quantity }])
      setName("")
      setQuantity(0)
      setDuration(0)
      window.navigator.vibrate(50)
      classAdded()
    } else {
      classNotAdded()
    }
  }

  const removeClass = (i) => {
    const newArray = classes.filter((_item, index) => index !== i)
    setClasses(newArray)
  }

  const handleInputChange = (e, func) => {
    const value = +e.target.value
    if (isNaN(value)) func(0)
    else func(value)
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 max-w-screen-sm mx-auto p-8">
        <Hour hour={hour} setHour={(e) => setHour(+e.target.value)} />

        <AddClass
          name={name}
          quantity={quantity}
          duration={duration}
          setName={(e) => setName(e.target.value)}
          setQuantity={(e) => handleInputChange(e, setQuantity)}
          setDuration={(e) => handleInputChange(e, setDuration)}
          handleSubmit={addClass}
        />

        <Classes classes={classes} hour={hour} removeClass={removeClass} />
      </main>
      <ToastContainer />
    </>
  )
}
