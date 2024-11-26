import Carrossel from "./Carrossel";
import {Instagram} from "lucide-react"

export default function Instagrams() {
  return (
    <section className="flex flex-col items-center justify-center h-[560px] bg-bege-claro">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-cor text-4xl">Siga nosso Instagram</h1>
        <a href="https://www.instagram.com/ritmo.fatal/" target="blank" className="flex text-cor text-3xl items-center gap-3 hover:text-marrom"><Instagram/>@ritmo.fatal</a>
      </div>
      
      <Carrossel/>
    </section>
  )
}
