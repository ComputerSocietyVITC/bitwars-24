import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="w-full" id="about">
      <div className="w-full flex flex-col">
        <p className=" font-extrabold text-5xl text-center">About Us</p>
        <div className="flex gap-[5vw] lg:px-12 py-12 items-center">
          <div className="shadow-md shadow-[#292761] flex flex-col items-center w-full rounded-2xl text-center bg-gradient-to-br from-[#100e1773] via-[#10345676] to-[#100e177e] border border-white/[0.2]">
            <Image
              alt=""
              height={500}
              width={600}
              src="/oc.webp"
              className="w-full px-8 rounded-3xl object-contain hidden sm:block pt-8 relative z-10"
            />
            <p className="text-white text-justify py-12 px-8 md:text-sm">
              VIT Chennai, established in 2010, is a leading private institution
              in Tamil Nadu, India, offering top-tier engineering programs with
              a focus on research, industry collaboration, and practical
              learning for successful technical careers. IEEE CS VITC,
              established in 2019 at VIT Chennai, where innovation thrives and
              technology excels. As a premier branch of IEEE and its Computer
              Society, we are committed to driving breakthroughs in computer
              science and connecting visionary tech enthusiasts globally.
            </p>
          </div>
          <Image
            alt=""
            height={500}
            width={600}
            src="/oc.webp"
            className="w-[35vw] rounded-xl object-contain sm:hidden relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
