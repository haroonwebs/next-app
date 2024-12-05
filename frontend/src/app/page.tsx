import { Header } from "../components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row w-screen h-auto overflow-hidden">
        <ExistingTickets />

        <section className="flex flex-col mt-4 sm:mt-[50px] lg:mr-12  sm:w-[45%] w-full">
          <div className="flex flex-col sm:w-full max-w-[400px] sm:h-[500px] h-[400px] mb-5 bg-[#EFEFF0] sm:ml-[30px] ml-[20px] shadow-lg sm:mr-[20px] mr-[20px] items-center font-mono rounded-lg">
            <p className="sm:mt-[30px] mt-[30px] text-[14px]">
              Select an existing ticket to log time
            </p>
            <p className="text-[14px]">or</p>
            <span className="text-lg text-blue-500">
              <Link href={"/newticket"} className="underline">
                Create a new One
              </Link>
            </span>

            <div className="w-[80%] h-[40px] bg-[#D9D9D9] mt-[40px] mb-4"></div>
            <div className="w-[80%] h-[40px] bg-[#D9D9D9]"></div>
            <div className="w-[80%] h-[40px] mt-[40px] mb-4 flex flex-row justify-between">
              <div className="w-[45%] h-[40px] bg-[#D9D9D9]"></div>
              <div className="w-[45%] h-[40px] bg-[#D9D9D9]"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
