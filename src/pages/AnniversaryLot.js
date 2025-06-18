import React, { useState } from 'react';

const AnniversaryLot = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      data: {
        name: form.get('name'),
        email: form.get('email'),
        instagram: form.get('instagram'),
        phone: form.get('phone'),
      },
    };

    try {
      await fetch('https://sheetdb.io/api/v1/ya1lgmr4wqlz6', { // replace with your real URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
      window.location.href = 'https://buy.stripe.com/test_8x2cN77Sa46j6e9bB20gw00';

    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-green-600">Thank you!</h1>
        <p className="mt-4">Your details were saved successfully.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-textbrown mb-6">Anniversary Lot</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 text-left">
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input name="name" type="text" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input name="email" type="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Instagram</label>
          <input name="instagram" type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input name="phone" type="tel" className="w-full p-2 border rounded" required />
        </div>
        <button
          type="submit"
          className="mt-4 bg-cafebrown text-white px-6 py-2 rounded hover:bg-opacity-90"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AnniversaryLot;
