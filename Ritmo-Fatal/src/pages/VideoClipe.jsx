
export default function VideoClipe() {
  return (
    <div className="bg-cinza flex flex-col items-center justify-center pt-10 gap-5">
      <div className="max-w-[840px] text-wrap flex flex-col items-center gap-3" >
        <h3 className="text-5xl text-center text-cor">Assista já nosso VideoClipe!</h3>
        <p className="font-helvetica text-[15px] text-lg text-center text-cor">Bem-vindos ao site oficial da Academia Ritmo Fatal. Ficamos muito felizes de ter você conosco!<br/>Clicando no vídeo abaixo, você poderá ver nosso videoclipe bla bla bla</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=42"
        title="Never Gonna Give You Up"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-3xl tablet:min-w-[840px] tablet:min-h-[472px] mt-16"
      ></iframe>
      <div className="mt-10">
        <h3 className="text-5xl text-center text-cor">Nosso Making Off!</h3>
      </div>

      <video controls  controlsList="nodownload" src="https://www.youtube.com/embed/yS39KxQWm8k" className="rounded-3xl tablet:max-w-[840px] tablet:max-h-[472px] mb-10"></video>
    </div>
  );
}
