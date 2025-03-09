import Label from "./Label"
import { FaRegStar, FaStar } from "react-icons/fa"

function ClassLevel({ name, setName, isClassSaved, toggleFavoriteClass }) {
  return (
    <>
      <Label htmlFor="class-input" text="Turma:" />
      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={toggleFavoriteClass}
          className="text-sky-500 text-2xl"
        >
          {isClassSaved ? <FaStar /> : <FaRegStar />}
        </button>
        <input
          id="class-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input flex-1 placeholder-slate-400 focus:placeholder-transparent transition"
          placeholder="Progression 2"
        />
      </div>
    </>
  )
}

export default ClassLevel
