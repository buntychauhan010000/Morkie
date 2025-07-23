import { useEffect, useState } from "react";
import Aos from "aos";
import Exclusive from "./component/Exclusive";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NFTGallery from "./component/NFTGallery";
import OwnNFTs from "./component/OwnNFTs";
import Submit from "./component/SubmitArtwork";
import Welcome from "./component/Welcome";

function App() {
  const [swiperReady, setSwiperReady] = useState(false); // <-- yeh add karo

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    setSwiperReady(true); // ab ye kaam karega
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Exclusive />
      <NFTGallery />
      <Welcome />
      <OwnNFTs />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;
