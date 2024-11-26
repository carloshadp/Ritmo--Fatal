

export default function Footer() {
  return (
    <footer className="bg-bege w-full desktop:h-36 h-40 flex flex-col justify-between ">

      <div className="w-full h-full flex flex-col tablet:flex-row tablet:pb-0 pb-5 justify-around items-center">
        <div>
        <h3 className="text-xl">RITMO FATAL</h3>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-helvetica">Nossas Redes</h3>
          <a href="https://www.instagram.com/ritmo.fatal/" className="font-helvetica_thin hover:text-marrom">Instagram: @ritmo.fatal</a>
        </div>

      </div>

      <div className="flex justify-around h-5">
        <div></div>

        <div className="text-sm">
          <p className="font-helvetica_thin">© 2024 by <a href="https://github.com/carloshadp" className="font-helvetica hover:text-marrom"> carloshadp</a></p>
        </div>

        <div></div>
      </div>
    </footer >
  )
}
