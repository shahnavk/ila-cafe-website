import React from 'react';
import carImage from '../assets/gift-car.png'; // <- Make sure to place an image in /src/assets/

const Home = () => (
  <>

    {/* 🎉 Anniversary Lot - Top Banner */}
    <section className="bg-cafebeige py-12 px-4 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-textbrown mb-12">
        🎉 Our Grand Anniversary Lot is Here!
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <div className="text-left md:text-left">
        
      <p className="text-base sm:text-lg text-textbrown mb-3">
        As we celebrate our journey, we're inviting you to be part of something unforgettable. A chance to win a <strong>Mercedes Benz A180</strong> — a gift from us to you.
      </p>
      <p className="text-sm sm:text-base text-textbrown mb-5">
        Participation is simple. Share the joy. Follow us. And stay connected as we grow together.
        The lucky draw will be held once <strong>799 entries</strong> are reached.
      </p>
          <a
            href="/anniversaryLot"
            className="inline-block mt-2 bg-cafebrown text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition font-semibold"
          >
            Enter the Lot Now →
          </a>
        </div>
        {/* Image */}
        <img
          src={carImage}
          alt="Mercedes Benz A180 Gift"
          className="w-full rounded-xl"
        />

      </div>
    </section>

    {/* Welcome Section */}
    <section className="relative bg-cafe-texture bg-cover bg-center min-h-[80vh] flex items-center justify-start px-6 sm:px-20">
      <div className="bg-white bg-opacity-90 p-6 sm:p-10 rounded-xl max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-cafebrown mb-4">Ila Cafe & Desserts</h2>
        <p className="text-4xl sm:text-5xl font-extrabold text-textbrown mb-4 leading-tight">
          Brewed with Love, <br className="hidden sm:block" /> Served with Soul
        </p>
        <p className="text-gray-700 text-base sm:text-lg max-w-xl mb-6">
          Serving irresistible waffles, dreamy desserts, and refreshing drinks in the heart of London.
        </p>
        <a
          href="/menu"
          className="inline-block bg-cafegreen text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-cafebrown transition"
        >
          View Our Menu
        </a>
      </div>
    </section>

  </>
);

export default Home;
