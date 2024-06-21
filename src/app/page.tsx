import { BentoGrids } from "@/components/bentoGrid";
import Navbar from "@/components/navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Lamp } from "@/components/ui/lamp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-slate-950">
      <Navbar />
      <div className="flex flex-col overflow-hidden ">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Text here <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Text here
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="">
        <Lamp />
      </div>
      <div className="">
        <BentoGrids />
      </div>
    </main>
  );
}
