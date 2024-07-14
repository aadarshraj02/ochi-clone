import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-32">
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center relative">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-6 py-1 border-[1px] rounded-full">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card w-1/2 h-full rounded-xl bg-zinc-900 flex items-center justify-center relative">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-5 bottom-5 px-4 py-1 border-[1px] rounded-full">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card w-1/2 h-full rounded-xl bg-zinc-900 flex items-center justify-center relative">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-5 bottom-5 px-4 py-1 border-[1px] rounded-full">
            BUSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
