export default function Banner() {
  return (
    <section className="relative grid items-center justify-center mx-3 my-5">
      <div className="relative">
        <img
          src="/images/foto-grupo.jpg"
          className="w-full h-[560px] rounded-3xl block"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-3xl"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[20] text-white grid items-center justify-center m-2">
        <h1 className="text-center text-bege tablet:text-9xl text-5xl">Ritmo Fatal <span><p className="text-white tablet:text-2xl text-lg">Onde nós te ajudamos a <br className="block tablet:hidden"/>brilhar como uma estrela!</p></span></h1>
        
      </div>
    </section>
  );
}
