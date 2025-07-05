const AnniversaryLotSuccess = () => (
  <div className="min-h-screen flex items-center justify-center bg-cafebeige bg-opacity-40 px-4">
    <div className="bg-white bg-opacity-90 p-8 sm:p-12 rounded-xl shadow-lg text-center max-w-xl w-full">
      <img
        src="/ila-logo.png"
        alt="Ila Cafe Logo"
        className="mx-auto w-16 mb-4"
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-3">
        🎉 Thank You!
      </h1>
      <p className="text-lg sm:text-xl text-textbrown font-medium">
        Your payment was successful and you're now officially entered into the
        <strong className="text-cafebrown"> Anniversary Lot Draw</strong>! 🍰🚗
      </p>
      <p className="text-sm text-gray-600 mt-4">
        Stay tuned on our Instagram and website for updates. We’ll notify you if
        you’re the lucky winner!
      </p>
      <a
        href="/"
        className="inline-block mt-6 bg-cafegreen text-white px-6 py-2 rounded-full font-semibold hover:bg-cafebrown transition"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default AnniversaryLotSuccess;
