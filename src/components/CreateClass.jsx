import { Input } from "./Input"
import { Title } from "./reusable/Title"

import { FaCirclePlus } from "react-icons/fa6"

export function CreateClass({
  quantity,
  duration,
  setQuantity,
  setDuration,
  handleSubmit,
  classNameInput,
}) {
  return (
    <div>
      <Title title="Adicionar aula" />

      <form onSubmit={handleSubmit} className="flex flex-col flex-wrap gap-4">
        {classNameInput}
        <Input
          label="Duração (min):"
          placeholder="Progression 2"
          id="class-duration"
          value={duration}
          onChange={setDuration}
        />
        <Input
          label="Quantidade de Aulas:"
          placeholder="5"
          id="class-quantity"
          value={quantity}
          onChange={setQuantity}
        />
        <CreateClassBtn />
      </form>
    </div>
  )
}

const CreateClassBtn = () => (
  <button className="flex center font-semibold gap-2 rounded py-2 px-8 transition bg-sky-500 text-white hover:ring-2 hover:ring-sky-500 hover:bg-sky-600">
    <FaCirclePlus />
    <span>Adicionar</span>
  </button>
)
