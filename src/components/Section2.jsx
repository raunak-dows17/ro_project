import React from 'react'
import { MdSecurityUpdateGood } from "react-icons/md"
import {BiSolidCheckboxChecked} from "react-icons/bi"

const Section2 = () => {
  return (
    <div id="section2" className="flex flex-col md:flex-row">
      <div className="w-1/2 text-left m-24 flex flex-col items-start">
        <p className="flex drop-shadow-2xl p-2 rounded-full mb-20 mx-auto">
          <MdSecurityUpdateGood className="text-blue-500 text-2xl" /> Customers’
          Needs Above All Else
        </p>
        <h2 className="text-5xl font-bold">
          Take Control <br />
          <span className="text-orange-500">
            Monitor Usage & Change Filters
          </span>{" "}
          <br />
          No Technician Needed
        </h2>
        <p className="my-5 text-slate-400">
          We have crafted a product that addresses the real frustrations of a
          customer. The first step is to ensure there are zero service delays.
        </p>
        <p className="flex font-bold text-lg mt-5">
          <BiSolidCheckboxChecked className="text-green-600 text-3xl rounded-full mr-5" />{" "}
          Smart Water Purifier With Self Servicing Capability
        </p>
        <p className="ml-12">
          Say goodbye to the hassle of scheduling a technician for purifier
          maintenance with our{" "}
          <span className="font-semibold">self-replacing</span> filters.
        </p>
        <p className="flex font-bold text-lg mt-5">
          <BiSolidCheckboxChecked className="text-green-600 text-3xl rounded-full mr-5" />{" "}
          Compensation For Service Delays
        </p>
        <p className="ml-12">
          You are entitled to a compensation of{" "}
          <span className="font-semibold">100 Rs/Day </span> if service is
          delayed for more than 24 hours.
        </p>
        <button className="mx-auto mt-14 bg-blue-500 px-12 py-6 rounded-full text-lg text-white hover:bg-blue-600 transition-ease-in-out duration-300">
          Next: Smart Water Conservation
        </button>
      </div>
      <img
        src="https://ik.imagekit.io/aq3ybtarw/landing/water-lg.webp?updatedAt=1684088939335"
        alt="gauge.ro"
        className="w-1/2 p-12"
      />
    </div>
  );
}

export default Section2
