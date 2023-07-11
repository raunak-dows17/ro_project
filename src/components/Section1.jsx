import React from 'react'

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-cyan-900">
      <img
        className="w-6/12 h-screen p-12"
        src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
        alt="gauge.ro"
      />
      <div className="w-6/12 h-screen py-24 px-5 flex flex-col items-center">
        <h2 className="text-7xl text-white my-6 mx-5">
          Gauge Water Purifier{" "}
          <span className="gradient-text">Puts An End</span> To RO Service Pain
        </h2>
        <p className="text-slate-400 my-6">
          Fully automatic water purifier provides the highest water savings
          while ensuring a seamless service experience.
        </p>
        <a href="#section2">
          <button className='bg-blue-500 px-12 py-6 rounded-full text-lg text-white hover:bg-blue-600 transition-ease-in-out duration-300'>Take a product Tour</button>
        </a>
        <p className='text-slate-300 my-6'>
          Experience Convencience Like Never Before With Our Smart Water Purifier
        </p>
      </div>
    </div>
  );
}

export default Section1
