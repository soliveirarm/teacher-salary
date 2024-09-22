function Input({ label, id, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
