function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {children}
    </div>
  )
}

export default Card