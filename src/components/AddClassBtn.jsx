import { RxPlusCircled } from "react-icons/rx"

const hoverClasses =
  "hover:scale-105 hover:bg-slate-50 hover:text-sky-500 hover:ring-2 hover:ring-sky-500"

export default function AddClassBtn() {
  return (
    <button
      className={`flex center font-semibold gap-2 bg-sky-500 text-white rounded py-2 px-8 transition ${hoverClasses}`}
    >
      <RxPlusCircled size={28} />
      <span>Adicionar</span>
    </button>
  )
}
