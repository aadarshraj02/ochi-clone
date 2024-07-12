import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-tl-2xl rounded-tr-2xl text-black">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#82914f] mt-20 pt-10 flex gap-5">
        <div className="w-1/2">
          <h1 className="text-[3vw] tracking-tight">Our approach:</h1>
          <button className="px-7 py-3 bg-zinc-900 rounded-full text-white mt-10 flex  gap-5 items-center uppercase">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] ">
          <img className="w-full h-full object-cover rounded-3xl " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
