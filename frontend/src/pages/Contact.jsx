import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from "../components/NewLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 ">Our Store</p>
          <p className="text-gray-500">
            54709 willims station <br />
            suite 530 , wsighthon Usa
          </p>
          <p className="text-gray-500">
            +919874563321 <br />
            Email: forever@forver.com
          </p>
          <p className="font-semibold text-xl text-gray-600 ">
            Carres At Forever
          </p>
          <p className="text-gray-500">lerarm more about team and carrore</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
};

export default Contact;
