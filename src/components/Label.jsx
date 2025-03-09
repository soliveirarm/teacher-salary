function Label({ htmlFor, text }) {
  return (
    <label className="font-semibold text-slate-400" htmlFor={htmlFor}>
      {text}
    </label>
  )
}

export default Label
