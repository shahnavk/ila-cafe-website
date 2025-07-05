import React, { useEffect, useState } from "react";
import ilaLogo from "../assets/ila-logo.png";

const AnniversaryLot = () => {
  const [soldCount, setSoldCount] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/dqvyfvsq0iezw")
      .then((res) => res.json())
      .then((data) => setSoldCount(data.length))
      .catch((err) => console.error("Error fetching sold count:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const formData = {
      name: form.get("name"),
      email: form.get("email"),
      instagram: form.get("instagram"),
      phone: form.get("phone"),
    };

    try {
      const response = await fetch("https://ila-cafe-website.onrender.com/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const session = await response.json();
      if (session.url) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.location.href = session.url;
          }, 500);
        });
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
      setLoading(false);
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
    <>
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center">
          <img src={ilaLogo} alt="Loading..." className="w-16 h-16 animate-bounce mb-2" />
          <p className="text-textbrown font-semibold animate-pulse">
            Redirecting to payment...
          </p>
        </div>
      )}

      <div className="bg-cafe-bg bg-cover bg-center min-h-screen py-6 px-4">
        <h1 className="text-3xl font-extrabold text-center text-textbrown my-6">
          Anniversary Lot
        </h1>
        <section className="max-w-6xl mx-auto mb-[40px]">
        <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md">
              <div className="text-white bg-textbrown p-4 rounded-lg text-center">
                <p className="text-lg">
                  A chance to win, limited to 799 entries. Join our Anniversary Lot today.
                </p>
              </div>
              <div className="w-full text-sm text-textbrown mt-4 flex justify-between">
                <span>{soldCount} / 799<br/>Coupons sold</span>
                <span>{799 - soldCount}<br/>Coupons remaining</span>
              </div>
              <div className="relative w-full bg-gray-200 h-4 rounded mt-2">
                <div
                  className="bg-cafegreen h-4 rounded"
                  style={{ width: `${(soldCount / 799) * 100}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-4 text-center text-xs text-textbrown">
                  {((soldCount / 799) * 100).toFixed(1)}% sold
                </div>
              </div>
            </div>
            </section>
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info Section */}
          <div className="space-y-8">
            

            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow text-textbrown leading-relaxed">
              <h3 className="text-xl font-bold mb-3">About This Lot</h3>
              <p>
                Purchase a <strong>£19.99 food voucher</strong> to enter our lucky draw and win a <strong>Mercedes Benz A180</strong>. Enjoy exclusive desserts at Ila Cafe with your voucher — a treat for you and a chance to win big! 🍰
              </p>
              <p className="mt-2">
                Don’t miss this opportunity! <strong>Buy now</strong> and become one of the lucky 799 participants.
              </p>
              <p className="mt-4 text-sm italic">
                💡 Track sales progress and stay updated at <a href="https://ilacafedesserts.com" className="underline text-cafegreen">ilacafedesserts.com</a>.
              </p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold text-textbrown mb-4">Rules & Regulations</h3>
              <ul className="list-disc list-inside text-textbrown text-sm space-y-2">
                <li>Must follow our Instagram account.</li>
                <li>Share your food experience and tag us.</li>
                <li>The winner will be selected via lucky draw.</li>
                <li>Draw will be held once all 799 vouchers are sold.</li>
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white bg-opacity-90 backdrop-blur p-6 sm:p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-textbrown mb-6 text-center">
              Enter Your Details
            </h2>
            <form onSubmit={handleSubmit} className="grid gap-4 text-left">
              <div>
                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Instagram</label>
                <input
                  name="instagram"
                  type="text"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-cafebrown text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
              >
                Save & Continue
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnniversaryLot;
