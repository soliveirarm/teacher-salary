export function Input({ label, id, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-400" htmlFor={id}>
        {label}
      </label>
      <input
        name={id}
        id={id}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
