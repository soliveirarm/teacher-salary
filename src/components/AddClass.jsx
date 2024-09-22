import { CiCirclePlus } from "react-icons/ci"
import Input from "./Input"
import Title from "./Title"

function AddClass({
  name,
  quantity,
  duration,
  setName,
  setQuantity,
  setDuration,
  handleSubmit,
}) {
  return (
    <div>
      <Title title="Adicionar aula" />

      <form onSubmit={handleSubmit} className="flex flex-col flex-wrap gap-4">
        <Input
          label="Turma:"
          placeholder="Progression 2"
          id="class-label"
          value={name}
          onChange={setName}
        />
        <Input
          label="Duração (min):"
          placeholder="Progression 2"
          id="class-duration"
          value={duration}
          onChange={setDuration}
          type="number"
        />
        <Input
          label="Quantidade de Aulas:"
          placeholder="5"
          id="class-quantity"
          value={quantity}
          onChange={setQuantity}
          type="number"
        />
        <button className="flex center-all gap-2 bg-blue-500 text-white rounded py-2 px-8">
          <CiCirclePlus size={24} />
          <span>Adicionar</span>
        </button>
      </form>
    </div>
  )
}

export default AddClass
