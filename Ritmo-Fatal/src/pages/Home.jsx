import Banner from "../components/Banner";
import Instagram from "../components/Instagram";
import Musica from "./Musica";
import Nos from "./Nos";
import VideoClipe from "./VideoClipe";

export default function Home() {
  return (
    <section className="bg-marrom py-10">

      <Banner/>

      <VideoClipe/>

      <Musica/>

      <Nos/>

      <Instagram/>

    </section>
  )
}
