import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Nav() {
    const [aberto, setAberto] = useState(false);

    const alternarNav = () => {
        setAberto(!aberto);
    }
  return (
    <>
    <nav className="flex items-center">
        <div className="hidden w-full tablet:flex gap-10 justify-between text-cor items-center mr-5">
            <NavLink to="/" className="hovers" >Home</NavLink>
            <NavLink to="/VideoClipe" className="hovers">VideoClipe</NavLink>

            <NavLink to="/Musica" className="hovers">Música</NavLink>

            <NavLink to="/Nos" className="hovers">Nós</NavLink>
        </div>
        <div className="tablet:hidden">
            <button onClick={alternarNav}>{aberto ? <X className="text-cor" /> : <Menu className="text-cor mr-5"/>}</button>
        </div>
    </nav>
    {aberto && (
        <div className="tablet:hidden text-cor text-xl flex flex-col items-center basis-full my-3 font-palatino"> 
            <NavLink to="/" className="hovers">Home</NavLink>
            <NavLink to="/VideoClipe" className="hovers">VideoClipe</NavLink>
            <NavLink to="/Musica" className="hovers">Música</NavLink>
            <NavLink to="/Nos" className="hovers">Nós</NavLink>
        </div>
    )}
</>
  )
} 
