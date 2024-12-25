import consultancy from "../../assets/consultancyBanner.jpg";
const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${consultancy})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center px-6 py-10">
        <h2
          className="text-[50px] font-bold mb-4 text-white"
          style={{ lineHeight: "70px" }}
        >
          Unlock Your <br /> Company's Potential...
        </h2>
        <p className="text-lg text-white mb-6">
          Our export team of consultants is dedicated to helping <br /> your
          business thrive.
        </p>
        <button className="flex items-center justify-center mx-auto px-6 py-3 bg-[#BCFF04] text-black rounded-full hover:bg-[#c5f542] transition">
          <span className="mr-2">Get a Free Consultation</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
