function FavoriteClass({ name, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-sky-900/20 text-sky-300 font-medium border border-sky-700/90 px-3 py-1 rounded-md hover:scale-105 transition active:opacity-70"
    >
      {name}
    </button>
  )
}

export default FavoriteClass
