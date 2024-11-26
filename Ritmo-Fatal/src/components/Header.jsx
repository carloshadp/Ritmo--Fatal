import Bar from "./Bar";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="w-full min-h-32 bg-bege-claro">
      <Bar />
      <header className="bg-bege-claro text-cor min-h-[5rem] py-4 sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-around ">
        <h1 className="text-2xl">Ritmo Fatal</h1>

        <Nav />
      </header>
    </div>
  );
}
