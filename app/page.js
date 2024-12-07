import Image from "next/image";
import homeimg1 from "../public/images/homeimg1.png";
import homeimg2 from "../public/images/homeimg2.png";
import { Play } from 'lucide-react';
export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#1D2951] to-[#191970] overflow-hidden">
      <div className="mx-8 flex justify-between my-7">
        <div className="flex flex-col">
          <div className="bg-[#dee0f0] w-full px-4 py-7 mb-7 rounded-3xl">
            <p className="text-6xl max-w-lg font-bold tracking-normal">
              New levels demand sharper moves
            </p>
            <p className="pt-14 max-w-sm">
              Get ready to slither into action! Our Snake Game challenges your
              reflexes and strategy as you navigate, grow, and conquer the
              leaderboard
            </p>
          </div>
          <div className="flex w-full gap-8">
            <Image
              src={homeimg1}
              alt="homeimg1"
              width={275}
              height={450}
              className="object-cover rounded-3xl"
            />
            <button className="bg-[#FFAA33] w-full flex justify-center items-center rounded-3xl text-white">
              <Play size={120}/>
            </button>
          </div>
        </div>
        <div className="w-[40%] rounded-3xl bg-black">
          <Image
          src={homeimg2}
          alt="homeimg2"
          width={520}
          height={200} 
          className="absolute bottom-[29px] right-[26px] rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
}
