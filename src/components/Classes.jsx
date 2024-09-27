import Class from "./Class"
import Title from "./Title"
import { PiBroomDuotone } from "react-icons/pi"

export default function Classes({ classes, hour, removeClass, clearAll }) {
  const TOTAL = classes.reduce(
    (acc, { duration, quantity }) => acc + duration * quantity,
    0
  )
  const TOTAL_HOURS = TOTAL / 60
  const SALARY = (TOTAL_HOURS * hour).toFixed(2)

  if (classes.length === 0) {
    return <p className="text-slate-600 text-center">Nenhuma aula adicionada</p>
  }

  return (
    <section className="flex flex-col gap-2">
      <Title title="Aulas" />

      <button
        onClick={clearAll}
        className="flex gap-2 items-center self-end btn -danger"
      >
        <PiBroomDuotone size="18" />
        Limpar tudo
      </button>

      {classes.map((classItem, i) => (
        <Class
          key={crypto.randomUUID()}
          {...classItem}
          removeClass={() => removeClass(i)}
        />
      ))}

      <p className="text-lg font-semibold self-end mt-4">
        Total: {TOTAL}m = {TOTAL_HOURS.toFixed(2)}h
      </p>

      <p className="text-xl font-bold self-end">
        Salário: <span className="text-green-600">R${SALARY}</span>
      </p>
    </section>
  )
}
