import { useEffect, useState } from "react"

import { CreateClass } from "./components/CreateClass"
import { Header } from "./components/Header"
import { ValuePerHour } from "./components/ValuePerHour"
import { Classes } from "./components/Classes"
import { ClassName } from "./components/ClassName"

import { useLocalStorage } from "@uidotdev/usehooks"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { classCreatedToast, classNotCreatedToast } from "./toastify"

export function App() {
  const [classes, setClasses] = useLocalStorage("TS_CLASSES", [])
  const [hour, setHour] = useLocalStorage("TS_HOUR", 30)
  const [favoriteClasses, setFavoriteClasses] = useLocalStorage(
    "TS_FAVORITE_CLASSES",
    []
  )

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [duration, setDuration] = useState(0)

  const [isClassSaved, setClassIsSaved] = useState(false)

  const createClass = (e) => {
    e.preventDefault()

    if (name && duration && quantity) {
      setClasses([...classes, { name, duration, quantity }])
      setName("")
      setQuantity(0)
      setDuration(0)
      window.navigator.vibrate(50)
      classCreatedToast()
    } else classNotCreatedToast()
  }

  const deleteClass = (i) => {
    const updatedArrayy = classes.filter((_item, index) => index !== i)
    setClasses(updatedArrayy)
  }

  const handleNumberInputChange = (e, setFunc) => {
    const value = +e.target.value
    isNaN(value) ? setFunc(0) : setFunc(value)
  }

  const createFavoriteClass = () => {
    if (!name) return
    setFavoriteClasses([...favoriteClasses, name])
  }

  const removeFavoriteClass = () => {
    const updatedSavedClasses = favoriteClasses.filter(
      (savedClass) => savedClass !== name
    )
    setFavoriteClasses(updatedSavedClasses)
  }

  useEffect(() => {
    if (favoriteClasses.includes(name)) setClassIsSaved(true)
    else setClassIsSaved(false)
  }, [name, favoriteClasses])

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 max-w-screen-sm mx-auto p-8">
        <ValuePerHour hour={hour} setHour={(e) => setHour(+e.target.value)} />

        <CreateClass
          classNameInput={
            <ClassName
              name={name}
              setName={(e) => setName(e.target.value)}
              favoriteClasses={favoriteClasses}
              createOrRemoveFavoriteClass={
                isClassSaved ? removeFavoriteClass : createFavoriteClass
              }
              isClassSaved={isClassSaved}
            />
          }
          quantity={quantity}
          duration={duration}
          setQuantity={(e) => handleNumberInputChange(e, setQuantity)}
          setDuration={(e) => handleNumberInputChange(e, setDuration)}
          handleSubmit={createClass}
        />

        <Classes
          classes={classes}
          hour={hour}
          deleteClass={deleteClass}
          deleteAllClasses={() => setClasses([])}
        />
      </main>
      <ToastContainer />
    </>
  )
}
