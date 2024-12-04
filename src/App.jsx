import { useEffect, useState } from "react"

import { AddClass } from "./components/AddClass"
import { Header } from "./components/Header"
import { ValuePerHour } from "./components/ValuePerHour"
import { Classes } from "./components/Classes"
import { ClassName } from "./components/ClassName"

import { useLocalStorage } from "@uidotdev/usehooks"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { classAddedToast, classNotAddedToast } from "./toastify"

export function App() {
  const [classes, setClasses] = useLocalStorage("TS_CLASSES", [])
  const [hour, setHour] = useLocalStorage("TS_HOUR", 30)
  const [savedClasses, setSavedClasses] = useLocalStorage(
    "TS_SAVED_CLASSES",
    []
  )

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [duration, setDuration] = useState(0)

  const [classIsSaved, setClassIsSaved] = useState(false)

  const addClass = (e) => {
    e.preventDefault()

    if (name && duration && quantity) {
      setClasses([...classes, { name, duration, quantity }])
      setName("")
      setQuantity(0)
      setDuration(0)
      window.navigator.vibrate(50)
      classAddedToast()
    } else {
      classNotAddedToast()
    }
  }

  const removeClass = (i) => {
    const newArray = classes.filter((_item, index) => index !== i)
    setClasses(newArray)
  }

  const handleNumberInputChange = (e, setFunc) => {
    const value = +e.target.value
    if (isNaN(value)) setFunc(0)
    else setFunc(value)
  }

  const saveClassToggle = () => {
    if (!name) return

    const filteredSavedClasses = savedClasses.filter(
      (savedClass) => savedClass !== name
    )

    if (!classIsSaved) setSavedClasses([...savedClasses, name])
    else setSavedClasses(filteredSavedClasses)
  }

  useEffect(() => {
    if (savedClasses.includes(name)) setClassIsSaved(true)
    else setClassIsSaved(false)
  }, [name, savedClasses])

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 max-w-screen-sm mx-auto p-8">
        <ValuePerHour hour={hour} setHour={(e) => setHour(+e.target.value)} />

        <AddClass
          classNameInput={
            <ClassName
              name={name}
              setName={(e) => setName(e.target.value)}
              savedClasses={savedClasses}
              saveClassToggle={saveClassToggle}
              classIsSaved={classIsSaved}
            />
          }
          quantity={quantity}
          duration={duration}
          setQuantity={(e) => handleNumberInputChange(e, setQuantity)}
          setDuration={(e) => handleNumberInputChange(e, setDuration)}
          handleSubmit={addClass}
        />

        <Classes
          classes={classes}
          hour={hour}
          removeClass={removeClass}
          deleteAllClasses={() => setClasses([])}
        />
      </main>
      <ToastContainer />
    </>
  )
}
