import { RxCross2 } from "react-icons/rx"

export default function Class({ name, duration, quantity, removeClass }) {
  return (
    <div className="flex justify-between items-center gap-4 bg-sky-50 p-3 rounded">
      <span className="capitalize font-semibold text-sky-500 sm:w-24">
        {name}
      </span>
      <span className=" sm:w-24">
        {duration}m x {quantity}
      </span>
      <span className=" sm:w-24">{duration * quantity}m</span>
      <button onClick={removeClass}>
        <RxCross2 className="text-red-500" size={20} />
      </button>
    </div>
  )
}
