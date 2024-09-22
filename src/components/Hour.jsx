function Hour({ hour, setHour }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium" htmlFor="hour">
        Hora/Aula
      </label>
      <input
        className="border-b-2 border-blue-500 shadow-md p-2 rounded "
        type="text"
        value={hour}
        onChange={setHour}
      />
    </div>
  )
}

export default Hour
