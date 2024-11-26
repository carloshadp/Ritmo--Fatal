export default function Musica() {
  return (
    <div className="w-full h-[560px] tablet:[960px] flex flex-col items-center justify-center gap-10 bg-cinza">
      <div>
        <h3 className="text-5xl text-center text-cor">MÚSICA!</h3>
        <p className="font-helvetica text-[15px] text-lg text-center text-cor">
          Baixe já a música &quot;Ritmo Fatal&quot; para ouvir onde e quando
          quiser
        </p>
      </div>

      <audio controls loop > 
        <source src="/music/water-sound.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
