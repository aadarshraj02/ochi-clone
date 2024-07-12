import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {

  
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl' >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden px-5 py-10">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[13vw] leading-none font-bold'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[13vw] leading-none font-bold'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[13vw] leading-none font-bold'>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
