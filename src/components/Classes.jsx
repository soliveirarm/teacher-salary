import { Class } from "./Class"
import { Title } from "./reusable/Title"

import { FaTrashCan } from "react-icons/fa6"

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

  if (!classes.length)
    return <p className="text-slate-400 text-center">Nenhuma aula adicionada</p>

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <Title title="Aulas" />
        <button
          onClick={deleteAllClasses}
          className="flex gap-2 items-center text-red-400 font-medium rounded transition p-2 hover:bg-red-400 hover:text-black"
        >
          <FaTrashCan /> Limpar tudo
        </button>
      </div>
      {renderedClasses}
      <Total minutes={TOTAL_MINUTES} hours={TOTAL_HOURS} />
      <Salary salary={SALARY} />
    </section>
  )
}

const Total = ({ minutes, hours }) => (
  <p className="text-lg text-slate-200 font-medium self-end mt-4">
    Total: {minutes}m = {hours.toFixed(2)}h
  </p>
)

const Salary = ({ salary }) => (
  <p className="text-xl text-slate-200 font-bold self-end">
    Salário: <span className="text-emerald-400">R${salary}</span>
  </p>
)
