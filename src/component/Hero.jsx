
import "aos/dist/aos.css";
import Navbar from "./common/Navbar";
import DigitalArt from "./common/DigitalArt";
import line from "../assets/img/line.png";
import Ellipse from "../assets/img/round.png";
import Ellipse2 from "../assets/img/round2.png";
import star from "../assets/img/star.png";

function Hero() {
 
  return (
    <div id="profile" className="bg-hero md:h-[60vh] lg:h-[80vh] xl:h-dvh">
      <div className="bg-overlay-layer" />
      <div className="relative z-10">
        <div>
          <img className="absolute opacity-50" src={star} alt="" />
          <img className="absolute hidden lg:w-3/5 xl:w-1/2 lg:flex right-0 opacity-40" src={line} alt="" />
          <img className="absolute right-5 opacity-40" src={Ellipse} alt="" />
          <img className="absolute top-0 -left-10 opacity-40" src={Ellipse2} alt="" />
        </div>
        <div data-aos="fade-down">
          <Navbar />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <DigitalArt />
        </div>
      </div>
    </div>
  );
}

export default Hero;
