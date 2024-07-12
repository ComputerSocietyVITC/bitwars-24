import Image from "next/image";
import { Poppins } from "next/font/google";
import Timer from "@/components/timer/Timer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="container mx-auto px-4">
        <h1>Bitwars-24</h1>
        <Image
          src="/bitwarsLogo.png"
          alt="logo"
          height={500}
          width={500}
          className="z-30 items-center justify-center align-center mx-auto mt-24"
        />
        <Timer />
        <div className="w-full h-screen">
          <p className="mt-24 ml-36 font-extrabold text-5xl">ABOUT US</p>
          <div className="w-2/4 h-80 ml-48 mt-6 rounded-2xl bg-[radial-gradient(_farthest-corner_at_10px_10px,_#104456_0%,_#100e17_100%_)] text-center">
            <p className="text-white">Lorem ipsum dolor set</p>
          </div>

          <p className="mt-24 text-center font-extrabold text-5xl">
            Our Event Showcase
          </p>
        </div>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
      </div>
    </main>
  );
}
