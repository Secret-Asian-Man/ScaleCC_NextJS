import Image from "next/image";
import { Inter } from "next/font/google";
import Rooms from "@/components/Rooms";
import FontSizeSel from "@/components/FontSizeSel";
import { useState } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState('None')

  const setSelectedRoomDebug = () => {
    setSelectedRoom(selectedRoom)
    console.log(selectedRoom)
  }

  return (
    <main
      className={`flex items-center flex-col p-5 ${inter.className}`}
    >
      <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/scale_logo_website_header.png"
          alt="Scale Logo"
          width={300}
          height={0}
          priority
        />
      </div>

      <div className="relative z-10 content-center grid grid-cols-2">
            <Rooms setSelectedRoom={setSelectedRoomDebug}/>
            <FontSizeSel />
      </div>

      <div className="relative pt-5">
        <textarea 
        className="resize-none text-center text-white bg-gray-900 opacity-80 pt-5 w-max h-max"
        name="closedCaptions"
        defaultValue="Select a room to begin Closed Captions."
        disabled={true}
        readOnly={true}
        wrap="soft"
        rows={20}
        cols={50}
        />
      </div>

    </main>
    
  );
}
