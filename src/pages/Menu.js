import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';

const menuData = {
  Waffles: [
    { title: "Oreo Bomb", desc: "Oreo Crumbs with milky chocolate", price: "8.49" },
    { title: "Strawberry Joy", desc: "Strawberries with milky choco", price: "8.89" },
    { title: "Ferrero Nutois", desc: "Ferrero with Nutella and nuts", price: "8.99" },
    { title: "Lotus Biscoffy", desc: "Lotus crumbs with lotus creamy spread", price: "8.49" },
    { title: "Kinder Boofy", desc: "Kinder bueno with milk and white chocolate", price: "8.99" },
    { title: "Nutella Banana Touch", desc: "Banana with nutella sauce", price: "8.99" },
    { title: "Toffee banana touch", desc: "Banana with toffee sauce", price: "8.99" },
    { title: "Maple Syrup", desc: "Canadian Maple syrup", price: "8.79" },
    { title: "Honeymoon", desc: "Honey syrup with Cinnamon powder", price: "8.79" },
    { title: "Brownie Spread", desc: "Brownie crushed with milk chocolate", price: "8.89" },
    { title: "Nutella Waffle", desc: "Pure signature nutella with soft serve ice cream", price: "8.79" },
    { title: "Marshmallow Waffle", desc: "Pink and white Marshmallow with milky chocolate sauce", price: "8.89" },
    { title: "Pistachiooo Waffle", desc: "Belgian waffle with Arabic pistachio nuts & sauce", price: "8.99" },
  ],
  Cookie: [
    { title: "Milk Classic Cookie", desc: "Milky choco with milky cookie", price: "7.59" },
    { title: "White Classic Cookie", desc: "White choco with white cookie", price: "7.59" },
    { title: "Kinder Bueno Cookie", desc: "Milk cookie with Kinder Bueno & sauces", price: "7.99" },
    { title: "Brownie Lash", desc: "Milk cookie with brownies & choco sauce", price: "7.79" },
    { title: "Lotus Biscoff Cookie", desc: "Lotus crumbs and sauce on white cookie", price: "7.89" },
  ],
  Pancakes: [
    { title: "Strawberry Fluffy Pancake", desc: "Strawberries, chocolate sauce, ice cream", price: "7.99" },
    { title: "Oreo Legacy Pancake", desc: "Oreo, chocolate sauce, whipped cream", price: "7.69" },
    { title: "Maple Dream Pancake", desc: "Maple syrup and whipped cream", price: "7.29" },
    { title: "Mi Ferrero Pancake", desc: "Ferrero with Nutella, ice cream", price: "7.99" },
  ],
  Milkshakes: [
    { title: "Ferrero Rocher Shake", price: "5.99" },
    { title: "Oreo Shake", price: "5.99" },
    { title: "Salted Caramel", price: "5.99" },
    { title: "Kinder Bueno", price: "5.99" },
    { title: "Lotus Biscoff", price: "5.99" },
  ],
  Cakes: [
    { title: "Chocolate Cake", price: "5.99" },
    { title: "Red Velvet Cake", price: "5.99" },
    { title: "Lotus Cheesecake", price: "5.99" },
    { title: "Carrot Cake", desc: "Topped with white chocolate and cream", price: "5.99" },
  ],
  Mocktails: [
    { title: "Redbull Mojito", desc: "Redbull with strawberry fizz", price: "4.99" },
    { title: "Strawberry Mojito", desc: "Strawberry fizz", price: "4.99" },
    { title: "Passion Fruit Mojito", desc: "Tropical fizz", price: "4.99" },
    { title: "Candyman Mojito", desc: "Blueberry with lime", price: "4.99" },
  ],
};

const Menu = () => {
  const categories = Object.keys(menuData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-textbrown mb-10">Our Menu</h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 text-sm sm:text-base font-medium rounded-full shadow-sm transition-all ${
              activeTab === category
                ? 'bg-cafebrown text-white'
                : 'bg-cafebeige text-textbrown hover:bg-amber-200'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData[activeTab].map((item, idx) => (
          <MenuCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
