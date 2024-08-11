import React from "react";

interface Props {
  name: string;
  image: string;
}

const Sponsor = ({ name, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-auto sm:w-12 md:w-16 mb-2 basis-3/4"
      />
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold pt-4 basis-1/4">
        {name}
      </p>
    </div>
  );
};

export default Sponsor;

