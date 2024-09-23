export default function Hour({ hour, setHour }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="input-label" htmlFor="hour">
        Hora/Aula
      </label>
      <input className="input" type="text" value={hour} onChange={setHour} />
    </div>
  )
}
