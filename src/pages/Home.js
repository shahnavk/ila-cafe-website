import React from 'react';

const Home = () => (
  <section className="bg-cafe-texture bg-cover bg-center px-20 py-52 text-left ">
  <h1 className="text-2xl font-bold text-cafebrown mb-4">Ila Cafe & Desserts</h1>
  <p className='text-4xl font-bold text-textbrown mb-4'>Brewed with Love, Served with Soul</p>
  <p className="text-gray-700 max-w-xl text-left">
    Serving irresistible waffles, dreamy desserts, and refreshing drinks <br/>in the heart of London.
  </p>
  <a
  href="#menu"
  className="inline-block mt-6 bg-cafegreen text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-cafebrown transition"
>
  View Our Menu
</a>
  
</section>
);


export default Home;