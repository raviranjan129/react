/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
   
      
      < motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
       <FaRegFileAlt/>
        <p className='text-xm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full     left-0 ' >

            <div className='flex items-center justify-between py-5 mb-3 px-8' >
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center  justify-center'>
                    {data.close? <IoMdClose/>:<BsDownload size=".7em " color='white'/>}
                
                </span>
            </div>
{data.tag.isOpen &&(
 <div className={`tag w-full py-4 ${data.tag.tagColor === "blue"? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
 <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
</div>
)
}
           
        </div>
       
               
      </motion.div>
  )
}

export default Card
