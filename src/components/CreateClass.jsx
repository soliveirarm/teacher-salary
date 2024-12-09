import { Input } from "./Input"
import { Title } from "./Title"
import { RxPlusCircled } from "react-icons/rx"

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
  <button className="flex center font-semibold gap-2 rounded py-2 px-8 transition hover:scale-105 bg-sky-500 text-white hover:ring-2 hover:text-sky-500 hover:ring-sky-500 hover:bg-slate-50">
    <RxPlusCircled size={28} />
    <span>Adicionar</span>
  </button>
)
