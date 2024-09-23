export default function Input({ label, id, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
