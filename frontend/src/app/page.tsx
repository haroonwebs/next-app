import { Header } from "../components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-row w-screen h-screen overflow-hidden">
        <ExistingTickets />

        <section className="flex flex-col mt-[50px] w-[45%]">
          <div className="flex flex-col w-full max-w-[400px] h-[500px] bg-[#EFEFF0] ml-[30px] shadow-lg mr-[20px] items-center font-mono rounded-lg">
            <p className="mt-[30px]">Select an existing ticket to log time</p>
            <p>or</p>
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
