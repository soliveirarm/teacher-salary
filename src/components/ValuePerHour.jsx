import Label from "./reusable/Label"

export function ValuePerHour({ hour, setHour }) {
  return (
    <div className="flex flex-col gap-2">
      <Label text="Hora/Aula" htmlFor="hour" />
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
