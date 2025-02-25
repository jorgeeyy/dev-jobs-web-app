import React from "react";

interface CardProps {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  //   website: string;
  //   apply: string;
  //   description: string;
  //   requirements: [content: string, items: string];
}

const Card: React.FC<CardProps> = ({
  //   id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    // <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 relative">
    <div className="bg-white h-64 w-96 pt-8 mt-10 rounded-xl relative">
      <div
        style={{ backgroundColor: logoBackground }}
        className="h-12 w-14 pt-2 pl-2 pb-1 rounded-lg ml-7 absolute z-10 -top-6"
      >
        {/* image logo  */}
        <img src={logo} alt="logo" className="h-4 w-8 mt-2 ml-1" />
      </div>
      <div className="mt-3 ml-7 mb-3 flex space-x-2">
        <p className="text-[#6E8098]">{postedAt}</p>
        <span className="text-[#6E8098]">.</span>
        <p className="text-[#6E8098]">{contract}</p>
      </div>
      <div className="mt-5 ml-7">
        <p className="font-bold h-8">{position}</p>
      </div>
      <div className="ml-7">
        <p className="text-[#6E8098]">{company}</p>
      </div>
      <div className="mt-10 ml-7">
        <p className="text-[#5964E0] font-medium">{location}</p>
      </div>
    </div>
  );
};

export default Card;
