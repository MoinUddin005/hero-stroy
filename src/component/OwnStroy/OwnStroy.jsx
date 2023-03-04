import React from "react";

const OwnStroy = () => {
  return (
    <div className="container mx-auto mt-24">
      <div class=" p-10 md:flex md:space-x-8 space-y-4 md:space-y-0 ">
        <div class="flex-grow ">
            <h1 className="text-5xl font-bold p-2">Become The Hero <br /> Of Your Own Story</h1>
            <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil <br /> dignissimos praesentium inventore 
                quia facere earum, soluta <br /> alias molestiae dolores libero?
            </p>
            <div className="flex">
            <input type="text" class="peer h-12 w-80 mt-8  bg-slate-200 px-4  drop-shadow  focus:bg-white focus:ring-2 focus:ring-blue-400" placeholder="Enter Your Email id"></input>
            <button className="text-lg leading-6 mt-8 w-36 h-12 bg-blue-500 font-bold text-yellow-50">Subscribe</button>
            </div>
        </div>
        <div class="flex-grow  p-2">
            <img src="../../../public/images/Audio track (1).png" alt="" />
            
        </div>
      </div>
    </div>
  );
};

export default OwnStroy;
