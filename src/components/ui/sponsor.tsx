// import React from "react";

// const Sponsor = ({ name, image }) => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center p-8">
//       <img src={image} alt={name} className="w-16 h-auto mb-2" />
//       <p className="">{name}</p>
//     </div>
//   );
// };

// export default Sponsor;

import React from "react";

const Sponsor = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-auto sm:w-12 md:w-16 mb-2"
      />
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">{name}</p>
    </div>
  );
};

export default Sponsor;
