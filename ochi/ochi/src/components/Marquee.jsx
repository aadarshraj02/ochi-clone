import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-2xl' >
      <div className="text border-t-2 border-b-2 border-zinc-600 flex whitespace-nowrap gap-10 overflow-hidden">
        <h1 className='text-[13vw] leading-none font-bold'>WE ARE OCHI</h1>
        <h1 className='text-[13vw] leading-none font-bold'>WE ARE OCHI</h1>
        <h1 className='text-[13vw] leading-none font-bold'>WE ARE OCHI</h1>
      </div>
    </div>
  )
}

export default Marquee
