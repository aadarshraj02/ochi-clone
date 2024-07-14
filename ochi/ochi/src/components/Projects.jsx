import { motion } from "framer-motion";
import React from "react";

function Projects() {
  return (
    <div className="w-full py-10">
      <div className="w-full px-20  border-b-[1px] border-zinc-500 pb-10">
        <h1 className="text-8xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="card-container w-1/2  h-[80vh] relative">
            <h1 className="absolute flex z-10 text-7xl tracking-tight left-full -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="card-container w-1/2  h-[80vh] relative">
            <h1 className="absolute z-10 text-7xl tracking-tight right-full translate-x-1/2 top-1/2 -translate-y-1/2">
              {"VISE".split("").map((item, index) => (
                <span className="" key={index}>
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
