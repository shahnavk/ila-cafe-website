import React from "react";
import carImage from "../assets/Benz.png"; // <- Make sure to place an image in /src/assets/

const Home = () => (
  <>
    {/* Welcome Section */}
    <section className="relative bg-cafe-texture bg-cover bg-center py-8 pt-0">
      {/* 🎉 Anniversary Lot - Top Banner */}
      <div className=" mx-auto bg-car-bg bg-center bg-contain bg-no-repeat p-2 sm:px-20 mb-8 py-8" style={{ backgroundSize: 'auto 90%' }} >
        {/* Text */}
        {/* <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-cafebrown flex items-center justify-center mx-auto text-center p-4 shadow-lg">
          <p className="text-center text-sm sm:text-base p-0 text-white">
            A chance to win, <br />
            limited to <strong>899 entries</strong>.<br /> Join our Anniversary
            Lot today.
          </p>
        </div> */}
        <div className="text-center md:text-center bg-white rounded-xl  bg-opacity-70 py-8 shadow-lg">
          <h2 className="text-2xl stroke-textbrown sm:text-3xl md:text-4xl font-extrabold text-textbrown animate-[zoomInOut_2s_ease-in-out_infinite] drop-shadow-sm" style={{textShadow: 'rgba(0, 0, 0, 0.4) 1px 3px 16px'}}>
            {/* 🎉 🎉 */}Anniversary Lucky Draw
          </h2>
          {/* <img
  src={carImage}
  alt="Mercedes Benz A180"
  className="mx-auto mt-4 w-3/5 sm:w-1/2 md:w-1/3"
/> */}
          <p className="text-xl sm:text-2xl text-cafebrown m-4">
            <strong>Mercedes Benz A180</strong>
          </p>
          <p className="text-base sm:text-lg text-textbrown">
            <strong>899 Entries. One Winner.</strong>
          </p>
          <a
  href="/anniversaryLot"
  className="inline-block mt-4 bg-gradient-to-r from-cafegreen via-textbrown to-cafegreen bg-[length:150%_200%] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg font-semibold animate-gradient-x"
>
Claim Your Spot Now →
</a>
        </div>
        {/* Image */}
        
      </div>
      <div className="px-6 sm:px-20">
        <div className="bg-white bg-opacity-90 p-6 sm:p-10 rounded-xl max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cafebrown mb-4 ">
            Ila Cafe & Desserts
          </h2>
          <p className="text-4xl sm:text-5xl font-extrabold text-textbrown mb-4 leading-tight">
            Brewed with Love, <br className="hidden sm:block" /> Served with
            Soul
          </p>
          <p className="text-gray-700 text-base sm:text-lg max-w-xl mb-6">
            Serving irresistible waffles, dreamy desserts, and refreshing drinks
            in the heart of London.
          </p>
          <a
            href="/menu"
            className="inline-block bg-cafegreen text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-cafebrown transition"
          >
            View Our Menu
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Home;
