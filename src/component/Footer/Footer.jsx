import React from "react";
import footerLogo from "../../../public/images/Logo.png"
import footerLogo1 from "../../../public/images/Logo (1).png"
import footerLogo2 from "../../../public/images/Logo (2).png"
import footerLogo3 from "../../../public/images/Logo (3).png"
import footerLogo4 from "../../../public/images/Logo (4).png"
import Bard from "../../../public/images/Brand.png"
import Vector from "../../../public/images/Vector.png"
import Cloud from "../../../public/images/Cloud.png"
import Lines from "../../../public/images/Lines.png"
import Vector2 from "../../../public/images/Vector (2).png"


const Footer = () => {
  return (
    <div>
      <div className="container mx-auto bg-[#503AE7] text-center relative -mb-20 mt-32">
        <h1 className="text-white font-bold text-3xl leading-9 pt-20 pb-16">Our Sponsors</h1>
        <div className="flex pb-20">
            <img className="ml-20" src={footerLogo} alt="" />
            <img className="ml-20" src={footerLogo1} alt="" />
            <img className="ml-20" src={footerLogo2} alt="" />
            <img className="ml-20" src={footerLogo3} alt="" />
            <img className="ml-20" src={footerLogo4} alt="" />
        </div>
      </div>
      <div className="bg-[#14142B] ">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 pt-48">
          <div>
            <img
              className="h-5 bg-white"
              src={Bard}
            />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-base leading-9">Pages</h1>
            <p className="mt-8">Home</p>
            <h1 className="mt-8">podcast</h1>
            <h1 className="mt-8">Host</h1>
            <h1 className="mt-8">block</h1>
          </div>

          <div className="text-white">
            <h1 className="font-bold text-base leading-9">Reach Us</h1>
            <h1 className="mt-8">Contract</h1>
            <h1 className="mt-8">About</h1>
          </div>
          <div className="text-white">
            <div className="flex items-center -ml-7">
              <p className="font-bold text-base leading-9">Subscribe</p>
            </div>
            <div className="mt-8  flex items-center ">
              <img src={Vector} alt="" />
              <p className="w-32 ml-2 font-semibold">Apple Podcasts</p>
            </div>
            <div className="mt-8  flex items-center">
              <img src={Cloud} alt="" />
              <p className="w-32 ml-2 font-semibold uppercase"> soundCloud </p>
            </div>
            <div className="mt-8  flex items-center">
              <img src={Lines} alt="" />
              <p className="w-32 ml-2 font-semibold">Google Podcasts</p>
            </div>
            <div className="mt-8  mb-24 flex items-center">
              <img src={Vector2} alt="" />
              <p className="w-32 ml-2 font-semibold">Spotify</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-800 text-center">
        <h1 className="text-white font-bold text-base leading-9">
          © Copyright Finsweet 2021
        </h1>
      </div>
    </div>
  );
};

export default Footer;
