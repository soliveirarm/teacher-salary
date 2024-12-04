export function Header() {
  return (
    <header className="flex items-center bg-slate-100 gap-4 p-4 mb-4">
      <img
        className="size-8"
        src="/ts.svg"
        alt="Blue icon with a white text written 'TS'"
      />
      <span>
        <h1 className="text-2xl text-sky-500 font-bold">Teacher Salary</h1>
        <p className="text-slate-600 italic">Calcula teu salário Juliaaa</p>
      </span>
    </header>
  )
}
