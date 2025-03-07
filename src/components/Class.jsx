import { FaXmark } from "react-icons/fa6"

export function Class({ name, duration, quantity, deleteClass }) {
  const totalMinutes = duration * quantity

  return (
    <div className="flex justify-between items-center gap-4 bg-sky-800/20 p-3 rounded border border-sky-900/80">
      <span className="capitalize font-semibold text-sky-400 sm:w-28">
        {name}
      </span>
      <span className="text-slate-300 sm:w-24">
        {duration}m x {quantity}
      </span>
      <span className="text-slate-300 sm:w-24">{totalMinutes}m</span>
      <button onClick={deleteClass}>
        <FaXmark className="text-red-400" size={20} />
      </button>
    </div>
  )
}
