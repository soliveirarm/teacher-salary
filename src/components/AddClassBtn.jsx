import { RxPlusCircled } from "react-icons/rx"

const hoverClasses =
  "hover:scale-105 hover:bg-slate-50 hover:text-blue-500 hover:ring-2 hover:ring-blue-500"

function AddClassBtn() {
  return (
    <button
      className={`flex center font-semibold gap-2 bg-blue-500 text-white rounded py-2 px-8 transition ${hoverClasses}`}
    >
      <RxPlusCircled size={28} />
      <span>Adicionar</span>
    </button>
  )
}

export default AddClassBtn
