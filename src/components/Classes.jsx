import Title from "./Title"

function Classes({ classes, hour }) {
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

      {classes.map(({ name, quantity, duration }) => (
        <div
          key={crypto.randomUUID()}
          className="flex justify-between items-center gap-4"
        >
          <span>{name}</span>
          <span>
            {duration}m x {quantity}
          </span>
          <span>{duration * quantity}m</span>
        </div>
      ))}

      <p className="text-lg font-semibold self-end mt-4">
        Total: {TOTAL}m = {TOTAL_HOURS.toFixed(2)}h
      </p>

      <p className="text-xl font-bold text-green-600 self-end">
        Salário: R${SALARY}
      </p>
    </section>
  )
}

export default Classes
