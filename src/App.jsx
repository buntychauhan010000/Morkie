
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
      <div className="overflow-x-hidden">
        <Hero />
        <Exclusive />
        <NFTGallery />
        <Welcome />
        <OwnNFTs />
        <Submit />
        <Footer />
      </div>
    </>
  );
}

export default App;
