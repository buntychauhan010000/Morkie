
import Exclusive from "./component/Exclusive";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NFTGallery from "./component/NFTGallery";
import OwnNFTs from "./component/OwnNFTs";
import Submit from "./component/SubmitArtwork";
import Welcome from "./component/Welcome";

function App() {
  return (
    <>
      <Hero />
      <Exclusive />
      <NFTGallery />
      <Welcome />
      <OwnNFTs />
      <Submit />
      <Footer />
    </>
  );
}

export default App;
