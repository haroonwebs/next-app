"use client";
import { Header } from "../components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";
import { useEffect } from "react";
import { useTickets } from "@/app/context/TicketContext";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  // const [tickets, setTickets] = useState([]);

  const { updateTickets } = useTickets();

  const getAllTickets = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/alltickets");
      const fetchTickets = res.data.data;
      console.log(res);

      // setTickets(fetchTickets);
      updateTickets(fetchTickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTickets();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-col  lg:flex-row w-screen h-auto overflow-hidden">
        <ExistingTickets />

        <section className="flex flex-col mt-4 sm:mt-[50px] lg:mr-12  sm:w-[45%] w-full">
          <div className="flex flex-col sm:w-full max-w-[400px] sm:h-[500px] h-[400px] mb-5 bg-[#EFEFF0] sm:ml-[30px] lg:ml-[20px] shadow-lg sm:mr-[20px] lg:mr-[20px] items-center font-mono rounded-lg">
            <p className="sm:mt-[30px] mt-[30px] text-[16px] font-[500px] text-[#000000]">
              Select an existing ticket to log time
            </p>
            <p className="text-[16px] font-[500px] text-[#000000]">or</p>
            <span className="text-[16px] font-[500px] text-[#000000]">
              <Link
                href={"/newticket"}
                className="underline text-[16px] font-[500px]"
              >
                Create a new one
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
