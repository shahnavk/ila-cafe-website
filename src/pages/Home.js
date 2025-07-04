import React from "react";
import carImage from "../assets/Benz.png"; // <- Make sure to place an image in /src/assets/

const Home = () => (
  <>
    {/* Welcome Section */}
    <section className="relative bg-cafe-texture bg-cover bg-center py-8 pt-0">
      {/* 🎉 Anniversary Lot - Top Banner */}
      <div className=" mx-auto p-2 sm:px-20 bg-car-bg bg-center bg-contain bg-no-repeat  bg-white bg-opacity-50 mb-8 py-8" style={{ backgroundSize: 'auto 90%' }} >
        {/* Text */}
        {/* <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-cafebrown flex items-center justify-center mx-auto text-center p-4 shadow-lg">
          <p className="text-center text-sm sm:text-base p-0 text-white">
            A chance to win, <br />
            limited to <strong>799 entries</strong>.<br /> Join our Anniversary
            Lot today.
          </p>
        </div> */}
        <div className="text-center md:text-center bg-white rounded-xl  bg-opacity-70 py-8 shadow-lg">
          <h2 className="text-2xl stroke-textbrown sm:text-3xl md:text-4xl font-extrabold text-textbrown animate-[zoomInOut_2s_ease-in-out_infinite]">
            {/* 🎉 🎉 */}Anniversary Gift
          </h2>
          <p className="text-base sm:text-lg text-cafebrown m-4">
            <strong>Mercedes Benz A180</strong>
          </p>
          <a
            href="/anniversaryLot"
            className="inline-block mt-2 bg-gradient-to-r from-cafegreen via-textbrown to-cafegreen bg-[length:150%_200%] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition font-semibold animate-gradient-x"
          >
            Enter the Lot Now →
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
