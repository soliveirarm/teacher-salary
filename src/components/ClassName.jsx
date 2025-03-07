import Label from "./reusable/Label"
import { FaRegStar, FaStar } from "react-icons/fa"

export function ClassName({
  name,
  setName,
  favoriteClasses,
  isClassSaved,
  createOrRemoveFavoriteClass,
}) {
  return (
    <>
      <Label htmlFor="class-input" text="Turma:" />
      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={createOrRemoveFavoriteClass}
          className="text-sky-500 text-2xl"
        >
          {isClassSaved ? <FaStar /> : <FaRegStar />}
        </button>
        <input
          id="class-input"
          type="text"
          value={name}
          onChange={setName}
          className="input flex-1"
          list="favorite-classes"
        />
      </div>
      {favoriteClasses && (
        <datalist id="favorite-classes">
          {favoriteClasses.map((favoriteClass, i) => (
            <option key={i} value={favoriteClass}>
              {favoriteClass}
            </option>
          ))}
        </datalist>
      )}
    </>
  )
}
