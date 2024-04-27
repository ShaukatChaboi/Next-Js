import Image from "next/image";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center items-center text-black text-lg font-semibold uppercase p-5 bg-cover fill-">
        <div className="absolute -z-10 inset-0">
          <Image src={homeImg} alt="homeimg" fill />
        </div>
      </div>
    </div>
  );
}
