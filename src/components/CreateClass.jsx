import { FaCirclePlus } from "react-icons/fa6"

function CreateClass() {
  return (
    <button className="flex center font-semibold gap-2 rounded py-2 px-8 transition bg-sky-500 text-white hover:ring-2 hover:ring-sky-500 hover:bg-sky-600">
      <FaCirclePlus />
      <span>Adicionar</span>
    </button>
  )
}

export default CreateClass
