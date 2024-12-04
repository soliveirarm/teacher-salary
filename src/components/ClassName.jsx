import { MdSave, MdOutlineSave } from "react-icons/md"

export function ClassName({
  name,
  setName,
  savedClasses,
  classIsSaved,
  saveClassToggle,
}) {
  return (
    <>
      <label htmlFor="class-input" className="font-medium text-slate-600">
        Turma:
      </label>
      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={saveClassToggle}
          className="text-sky-500 text-2xl"
        >
          {classIsSaved ? <MdSave /> : <MdOutlineSave />}
        </button>
        <input
          id="class-input"
          type="text"
          value={name}
          onChange={setName}
          className="input flex-1"
          list="saved-classes"
        />
      </div>
      {savedClasses && (
        <datalist id="saved-classes">
          {savedClasses.map((savedClass, i) => (
            <option key={i} value={savedClass}>
              {savedClass}
            </option>
          ))}
        </datalist>
      )}
    </>
  )
}
