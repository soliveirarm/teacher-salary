import { RxCross2 } from "react-icons/rx"

function Class({ name, duration, quantity, removeClass }) {
  return (
    <div className="flex justify-between items-center gap-4 bg-blue-50 p-3 rounded">
      <span className="capitalize font-medium">{name}</span>
      <span>
        {duration}m x {quantity}
      </span>
      <span>{duration * quantity}m</span>
      <button onClick={removeClass}>
        <RxCross2 className="text-red-500" size={20} />
      </button>
    </div>
  )
}

export default Class
