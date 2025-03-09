import { useEffect, useState } from "react"

import CreateClass from "./components/CreateClass"
import ValuePerHour from "./components/ValuePerHour"
import Classes from "./components/Classes"
import ClassLevel from "./components/ClassLevel"
import Title from "./components/Title"
import Input from "./components/Input"
import FavoriteClass from "./components/FavoriteClass"

import { useLocalStorage } from "@uidotdev/usehooks"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import {
  classCreatedToast,
  classNotCreatedToast,
  createFavoriteClassWarnings,
} from "./js/toastify"

function App() {
  const [classes, setClasses] = useLocalStorage("TS_CLASSES", [])
  const [hour, setHour] = useLocalStorage("TS_HOUR", 30)
  const [favoriteClasses, setFavoriteClasses] = useLocalStorage(
    "TS_FAVORITE_CLASSES",
    []
  )

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [duration, setDuration] = useState(0)

  const [isClassSaved, setIsClassSaved] = useState(false)

  const clearAllFields = () => {
    setName("")
    setQuantity(0)
    setDuration(0)
  }

  const createClass = (e) => {
    e.preventDefault()

    if (name && duration && quantity) {
      setClasses([...classes, { name, duration, quantity }])
      clearAllFields()
      window.navigator.vibrate(50)
      classCreatedToast()
    } else classNotCreatedToast()
  }

  const deleteClass = (i) => {
    const newClasses = classes.filter((_item, index) => index !== i)
    setClasses(newClasses)
  }

  const handleInputValue = (e, setFunc) => {
    const value = +e.target.value
    isNaN(value) ? setFunc(0) : setFunc(value)
  }

  const createFavoriteClass = () => {
    const { classNameWarning, durationWarning } = createFavoriteClassWarnings
    if (!name) {
      classNameWarning()
      return
    }
    if (!duration) {
      durationWarning()
      return
    }
    setFavoriteClasses([...favoriteClasses, { name, duration }])
  }

  const deleteFavoriteClass = () => {
    const newFavoriteClasses = favoriteClasses.filter((favClass) => {
      return favClass.name !== name && favClass.duration !== duration
    })
    setFavoriteClasses(newFavoriteClasses)
    clearAllFields()
  }

  const toggleFavoriteClass = isClassSaved
    ? deleteFavoriteClass
    : createFavoriteClass

  const getFavoriteClass = (i) => {
    const { name, duration } = favoriteClasses[i]
    setName(name)
    setDuration(duration)
  }

  const favoritesIsNotEmpty = favoriteClasses.length !== 0

  const renderedFavoriteClasses = favoriteClasses.map(({ name }, i) => (
    <FavoriteClass onClick={() => getFavoriteClass(i)} name={name} key={i} />
  ))

  // Changes the star icon to outlined or filled depending on the text on name and duration
  useEffect(() => {
    const classIsAFavorite = favoriteClasses.some(
      (e) => e.name === name && e.duration === duration
    )
    if (classIsAFavorite) setIsClassSaved(true)
    else setIsClassSaved(false)
  }, [name, duration, favoriteClasses])

  return (
    <>
      <header className="bg-zinc-800/20 py-2 mb-4">
        <h1 className="text-2xl text-sky-400 font-bold">Teacher Salary</h1>
      </header>

      <main className="flex flex-col gap-8">
        <ValuePerHour hour={hour} setHour={setHour} />

        <div>
          <Title title="Adicionar aula" />

          <form
            onSubmit={createClass}
            className="flex flex-col flex-wrap gap-4"
          >
            <ClassLevel
              name={name}
              setName={setName}
              favoriteClasses={favoriteClasses}
              toggleFavoriteClass={toggleFavoriteClass}
              isClassSaved={isClassSaved}
            />
            {favoritesIsNotEmpty && (
              <div className="flex flex-wrap gap-2 py-2">
                {renderedFavoriteClasses}
              </div>
            )}
            <Input
              label="Duração (min)"
              id="class-duration"
              value={duration}
              onChange={(e) => handleInputValue(e, setDuration)}
            />
            <Input
              label="Quantidade de Aulas"
              id="class-quantity"
              value={quantity}
              onChange={(e) => handleInputValue(e, setQuantity)}
            />
            <CreateClass />
          </form>
        </div>

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

export default App
