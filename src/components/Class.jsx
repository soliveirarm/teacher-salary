import { RxCross2 } from "react-icons/rx"

export function Class({ name, duration, quantity, deleteClass }) {
  const totalMinutes = duration * quantity

  return (
    <div className="flex justify-between items-center gap-4 bg-sky-50 p-3 rounded shadow shadow-sky-100">
      <span className="capitalize font-semibold text-sky-500 sm:w-28">
        {name}
      </span>
      <span className=" sm:w-24">
        {duration}m x {quantity}
      </span>
      <span className=" sm:w-24">{totalMinutes}m</span>
      <button onClick={deleteClass}>
        <RxCross2 className="text-red-500" size={20} />
      </button>
    </div>
  )
}
