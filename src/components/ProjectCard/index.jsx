import { MagnifyingGlassPlusIcon } from '@/icons'
import React from 'react'


const ProjectCard = ({ cardData, cardInd, handleClick }) => {
  return (
    <div
      className="relative group overflow-hidden grow max-h-595 w-full sm:w-1/2 lg:w-1/4 m-5 sm:m-0 cursor-pointer"
      style={{ height: "70vh" }}
      onClick={() => handleClick(cardData, cardInd)}

    >
      <div
        className="flex items-center justify-center absolute top-1/2 left-1/2 translate-x-96 
                  group-hover:-translate-x-1/2 -translate-y-1/2 transition-all duration-700
                  opacity-0 group-hover:opacity-100
                   ease-in-out z-10  bg-main-primary p-5 rounded-full">
        <MagnifyingGlassPlusIcon />
      </div>
      <div className="absolute left-0 top-0 w-full h-full z-10 group-hover:opacity-0 duration-300" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>


        <div className="w-full h-full relative">

          <h2 className="text-white font-bold text-2xl tracking-wider p-3 mt-5">{cardData.city}</h2>
          <h3 className="absolute text-white  uppercase font-light bottom-10 left-5 flext items-start  "
            style={{ letterSpacing: "10px" }}
          >
            {cardData.service}

          </h3>
        </div>
      </div>

      <img src={cardData.image} loading='lazy' alt="" className="w-full h-full object-fill" />
    </div>
  )
}

export default ProjectCard