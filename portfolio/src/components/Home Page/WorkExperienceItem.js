import React from 'react';

const WorkExperienceItem = ({ date, title, company, description }) => {
  return (
    <div className="space-y-6 text-white">
      <p className="text-lg text-gray-400">{date}</p>
      <h3 className="text-2xl sm:text-4xl lg:text-5xl text-[#ABABB5] font-semibold">
        {title}, <span className="hover:text-white transition duration-200">{company}</span>
      </h3>

      {/* Job description */}
      <div
        className="group flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0"
      >
        {/* Job description text */}
        <div>
          <p className="text-[#ABABB5] font-semibold pb-6 sm:max-w-2xl group-hover:text-white transition duration-200">
            {description}
          </p>
        </div>

        {/* Right-side button */}
        <div>
          <button
            className="bg-black text-white border border-white rounded-[50px] px-6 py-3 sm:py-4
            hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Visit Link
          </button>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="h-[1px] bg-white mt-14" />
    </div>
  );
};

export default WorkExperienceItem;
