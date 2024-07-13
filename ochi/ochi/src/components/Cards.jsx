import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-32">
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card w-1/2 h-full rounded-xl  bg-[#004d43]"></div>
        <div className="card w-1/2 h-full rounded-xl bg-[#004d43]"></div>
      </div>
    </div>
  );
}

export default Cards;
