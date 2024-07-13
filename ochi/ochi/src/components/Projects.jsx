import React from "react";

function Projects() {
  return (
    <div className="w-full py-10">
      <div className="w-full px-20  border-b-[1px] border-zinc-500 pb-10">
        <h1 className="text-8xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="card-container w-1/2  h-[80vh] overflow-hidden">
            <div className="card w-full h-full rounded-xl bg-green-600"></div>
          </div>
          <div className="card-container w-1/2  h-[80vh]  overflow-hidden">
            <div className="card w-full h-full rounded-xl bg-green-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
