import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='text-structure mt-40 px-20'>
            {["We Create", "Eye Opening","Presentations"].map((item,index)=>{
                return <div className="masker" key={index}>
                <h1 className='uppercase text-8xl leading-none tracking-tighter font-medium'>{item}</h1>
            </div>
            })}
        </div>
        <div className="border-t-[1px] border-zinc-600 mt-28"></div>
    </div>
  )
}

export default LandingPage
