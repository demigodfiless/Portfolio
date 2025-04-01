"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const CaseStudyCard = ({ imgSrc, title, description }) => {
  const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCursorPos({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex-1 group cursor-none"
      style={{ overflow: "hidden" }}
    >
      <div>
        <Image
          height={600}
          width={600}
          src={imgSrc}
          alt="case study image"
          className="w-full h-[300px] md:h-[300px] object-cover rounded-[30px] md:rounded-[100px] shadow-md"
        />

        {/* Card content */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6 px-5 cursor-none">
          <div className="text-center md:text-left text-white">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          <div>
            <div className="border-2 border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black 
            hover:bg-white transition-all duration-300 cursor-none">
              <FiArrowRight className="text-lg md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div
        className="absolute inset-0 bg-black bg-opacity-20 rounded-[30px] md:rounded-[100px]
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-none"
      >
        <div
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute w-32 h-32 bg-white/90 text-black flex justify-center items-center rounded-full
        shadow-lg transition-transform duration-150 cursor-none"
        >
          <p>VIEW PROJECT</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
