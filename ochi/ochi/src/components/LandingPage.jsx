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
        <div className="border-t-[1px] border-zinc-600 mt-28 flex justify-between items-center py-5 px-20">
            {["For Public and Private companies","From the first pitch to IPO"].map((item,index)=>{
             return <p key={index} className='text-md font-light tracking-tighter leading-none text-white'>{item}</p>
        })}
        </div>
    </div>
  )
}

export default LandingPage
