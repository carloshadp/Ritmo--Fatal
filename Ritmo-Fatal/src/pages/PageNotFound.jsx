import { Frown, ArrowBigLeft  } from "lucide-react"
import { NavLink } from "react-router-dom"
export default function PageNotFound() {
  return (
    <div className="w-full h-screen bg-bege flex flex-col items-center justify-center">
      <h1 className="text-4xl text-cor">Page Not Found 404</h1>
      <p className="text-3xl text-cor">Lugar errado amigo</p>
      <Frown className="text-cor" size={300}/>
      <NavLink to="/" className="text-cor flex items-center text-2xl"><ArrowBigLeft/>VOLTAR</NavLink>
    </div>
  )
}
