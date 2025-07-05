import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-cafe-bg bg-cover bg-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-textbrown mb-6">Contact Us</h1>

        <div className="space-y-4 text-left text-textbrown text-base leading-relaxed">
          <p>
            <span className="font-semibold">📧 Email:</span> <a href="mailto:Ilavegan.veg@gmail.com" className="text-cafebrown hover:underline">Ilavegan.veg@gmail.com</a>
          </p>

          <p>
            <span className="font-semibold">📞 Phone:</span> <a href="tel:02080770054" className="text-cafebrown hover:underline">020 8077 0054</a>
          </p>

          <p>
            <span className="font-semibold">📍 Address:</span> <br />
            125–131 Westminster Bridge Road,<br />
            London SE1 7HJ
          </p>
        </div>

        <div className="mt-8">
          <a href="tel:02080770054" className="inline-block bg-cafegreen text-white px-6 py-2 rounded-full hover:bg-cafebrown transition font-semibold">
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
