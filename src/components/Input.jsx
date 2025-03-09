import Label from "./Label"

function Input({ label, id, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label text={label} htmlFor={id} />
      <input
        name={id}
        id={id}
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
