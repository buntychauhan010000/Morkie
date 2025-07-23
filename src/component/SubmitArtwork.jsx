
import artworkImg from "../assets/img/Sphere.png";

import "aos/dist/aos.css";

function SubmitArtwork() {

  return (
    <div className="bg-black w-full px-4 py-8 sm:py-12 flex justify-center  md:my-20">
      <div className="w-full max-w-6xl bg-gradient-purple rounded-2xl p-8 md:p-12 flex flex-col-reverse text-center md:text-start gap-10 md:flex-row items-center justify-between text-white">
        {/* Left Text Section */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl font-bold font-Saira mb-4">
            Submit Your Artwork
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6">
            We support artists globally. With Morkie, showcase your creativity
            to the world.
          </p>
          <button
            className="bg-white text-purple font-bold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join Morkie
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0" data-aos="fade-left" data-aos-delay="100">
          <img
            src={artworkImg}
            alt="Artwork Globe"
            className="w-48 md:w-64 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}

export default SubmitArtwork;
