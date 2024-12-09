import { Class } from "./Class"
import { Title } from "./Title"

import { MdDelete } from "react-icons/md"

export function Classes({ classes, hour, deleteClass, deleteAllClasses }) {
  const TOTAL_MINUTES = classes.reduce(
    (acc, { duration, quantity }) => acc + duration * quantity,
    0
  )
  const TOTAL_HOURS = TOTAL_MINUTES / 60
  const SALARY = (TOTAL_HOURS * hour).toFixed(2)

  const renderedClasses = classes.map((classItem, i) => (
    <Class key={i} {...classItem} deleteClass={() => deleteClass(i)} />
  ))

  if (!classes.length) return <NoClasses />

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <Title title="Aulas" />
        <button
          onClick={deleteAllClasses}
          className="flex gap-2 items-center text-red-500 font-medium rounded transition p-2 hover:bg-red-500 hover:text-white"
        >
          <MdDelete className="text-2xl" /> Limpar tudo
        </button>
      </div>
      {renderedClasses}
      <Total minutes={TOTAL_MINUTES} hours={TOTAL_HOURS} />
      <Salary salary={SALARY} />
    </section>
  )
}

const NoClasses = () => (
  <p className="text-slate-600 text-center">Nenhuma aula adicionada</p>
)

const Total = ({ minutes, hours }) => (
  <p className="text-lg font-semibold self-end mt-4">
    Total: {minutes}m = {hours.toFixed(2)}h
  </p>
)

const Salary = ({ salary }) => (
  <p className="text-xl font-bold self-end">
    Salário: <span className="text-green-600">R${salary}</span>
  </p>
)
