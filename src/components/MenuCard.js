import React from 'react';

const MenuCard = ({ title, desc, price }) => (
  <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
    <h3 className="font-semibold text-lg">{title}</h3>
    {desc && <p className="text-sm text-gray-600 my-1">{desc}</p>}
    <p className="text-right text-orange-500 font-semibold">£{price}</p>
  </div>
);

export default MenuCard;
