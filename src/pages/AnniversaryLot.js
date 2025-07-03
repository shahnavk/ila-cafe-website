import React, { useState } from 'react';

const AnniversaryLot = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
  
    const formData = {
      name: form.get('name'),
      email: form.get('email'),
      instagram: form.get('instagram'),
      phone: form.get('phone'),
    };
  
    try {
      // 1. Save to SheetDB
      await fetch('https://sheetdb.io/api/v1/ya1lgmr4wqlz6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });
  
      // 2. Call your backend to create Stripe session
      const response = await fetch('https://ila-cafe-website.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const session = await response.json();
  
      if (session.url) {
        window.location.href = session.url; // Redirect to Stripe Checkout
      } else {
        alert('Something went wrong, please try again.');
      }
  
    } catch (error) {
      console.error(error);
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
    <section className="bg-cafe-bg bg-cover bg-center px-4 py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      {/* Left: Banner + Info */}
      <div className="space-y-6">
        {/* Top Banner */}
        <div className=" text-white rounded-xl p-6 shadow-md">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg text-center">
            <h1 className="text-3xl font-extrabold mb-2">🎉 Anniversary Lot</h1>
            <p className="text-lg">Win a Mercedes Benz A180 — only 799 spots available!</p>
          </div>
        </div>
  
        {/* Info Section */}
        <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-textbrown mb-4">Rules & Regulations:</h3>
          <ul className="list-disc list-inside text-sm sm:text-base text-textbrown space-y-2">
            <li>Must follow Instagram account.</li>
            <li>Add your story of food in Instagram and give us the feedback.</li>
            <li>Winner will choose at a Lucky Draw.</li>
            <li>Lucky Draw content only after 799 coupon completed.</li>
          </ul>
        </div>
      </div>
  
      {/* Right: Form */}
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 sm:p-8 rounded-xl shadow-md">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-textbrown mb-6 text-center">Enter Your Details</h2>
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
                className="mt-4 bg-cafebrown text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
              >
                Save & Continue
              </button>
            </form>
          </>
        ) : (
          <div className="text-center p-6">
            <h1 className="text-2xl font-bold text-green-600">Thank you!</h1>
            <p className="mt-4 text-textbrown">Your details were saved successfully.</p>
          </div>
        )}
      </div>
    </section>
  );
  
};

export default AnniversaryLot;
