import Input from "./Input"
import Title from "./Title"
import AddClassBtn from "./AddClassBtn"

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
        <AddClassBtn />
      </form>
    </div>
  )
}

export default AddClass
