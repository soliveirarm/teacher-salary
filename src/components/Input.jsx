function Input({ label, id, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-600" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="p-2 bg-transparent border-b-2 border-blue-500 rounded shadow-md"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
