import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes  w-full h-screen">
      <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center relative'>
        <div className="absolute w-1/3  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center relative">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative flex items-center justify-center ">
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 "
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center relative">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative flex items-center justify-center ">
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 "
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
