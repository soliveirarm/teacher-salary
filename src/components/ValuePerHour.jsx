export function ValuePerHour({ hour, setHour }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-600" htmlFor="hour">
        Hora/Aula
      </label>
      <input
        id="hour"
        name="hour"
        className="input"
        type="text"
        value={hour}
        onChange={setHour}
      />
    </div>
  )
}
