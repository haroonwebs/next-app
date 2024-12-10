"use client";
import { Header } from "@/components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Timer } from "@/components/Timer";
import { CountUpTimer } from "@/components/CountUpTimer";
// import { useTickets } from "../context/TicketContext";

export default function EditTicket() {
  const searchParams = useSearchParams();
  const [hours, setHours] = useState("");
  const [tickettype, setDetails] = useState("");
  const [timerCount, setTimerCount] = useState(false);

  // const { updatetickets } = useTickets();

  useEffect(() => {
    const logDetails = searchParams.get("tickettype");
    const logHours = searchParams.get("hours");

    setHours(logHours);
    setDetails(logDetails);
  }, [searchParams]);

  const id = searchParams.get("id");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:4000/api/v1/tickets/${id}`,
        {
          hours,
          tickettype,
        }
      );
      // console.log(res);
      // const updateticket = res.data.data;
      // console.log(updateticket);

      // updatetickets(updateticket);

      toast.success(res.data.message);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred.");
      }
    }
  };

  // rander countdown and countup timer baises on this button
  const changeCoutTimer = () => {
    setTimerCount((prev) => !prev);
  };

  return (
    <>
      <Header />

      <main className="flex flex-col lg:flex-row w-screen h-full overflow-hidden">
        <ExistingTickets />{" "}
        <section className="flex flex-row sm:mt-[50px] mt-8 sm:w-[45%] w-full ">
          <div className="flex flex-col w-[400px] border border-[#7D7D82] h-[580px] bg-[#FFFFFF] mr-2 ml-2  lg:ml-5 mb-5 shadow-lg lg:mr-[20px] items-start font-mono rounded-[10px]">
            <div className="flex flex-row w-full border min-h-[40px] bg-[#FFFFFF] items-center font-mono rounded-t-lg">
              <div className="h-full w-[150px] flex items-center">
                <img
                  className="ml-4"
                  src="/images/Group 3.png"
                  alt="ticket logo"
                />
                <span className="text-[16px] text-[#000000] font-[500px] ml-2">
                  TECH-
                </span>
                <span className="text-[16px] text-[#000000] font-[500px]">
                  {id}
                </span>
              </div>
              <div className="flex h-full w-full overflow-hidden text-nowrap ml-1 p-[8px] font-[400px] text-[15px]">
                {tickettype}
              </div>
            </div>

            <h3 className="mt-[30px] font-mono text-[#000000] font-[400px] text-[18px]  ml-[40px] ">
              Log time manually
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-full items-center mt-2"
            >
              {/* extra inputs */}

              <div className="w-[80%] p-1 h-[37px] flex items-center border border-[#B4B4B8] rounded-[4px]">
                <input
                  type="number"
                  name=""
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  min="0.00"
                  id=""
                  placeholder="0.00"
                  className="w-full h-full bg-[#FFFFFF] placeholder-[#000000] text-[#000000] px-1 border-r-2 font-[400px] text-[15px] outline-none"
                />
                <img
                  src="/images/image 2.png"
                  alt=""
                  className="w-6 h-4 p-[2px]"
                />
              </div>

              <div className="flex flex-row sm:flex-row  w-[95%] mt-[20px] px-2 h-4 sm:items-center sm:justify-between items-center justify-between font-mono">
                <span className="text-[18px] font-[400px]">
                  Track with Timer
                </span>
                <span
                  onClick={changeCoutTimer}
                  className="underline text-[#103BA3] text-[14px] font-[400px]"
                >
                  {timerCount ? "Use count down timer" : "Use count up timer"}
                </span>
              </div>

              {timerCount ? (
                <CountUpTimer hours={hours} />
              ) : (
                <Timer hours={hours} />
              )}

              {/* Existing Form Fields */}
              <fieldset className="w-[80%] min-h-[100px] max-h-[100px] mt-3 border border-[#B4B4B8] text-sm rounded-md">
                <legend className="text-[#424247] text-[14.5px] ml-2">
                  Notes
                </legend>
                <textarea
                  name=""
                  id=""
                  onChange={(e) => setDetails(e.target.value)}
                  value={tickettype}
                  className="resize-none w-full min-h-full max-h-full px-3 text-sm rounded-md outline-none"
                ></textarea>
              </fieldset>

              <div className="flex flex-row items-center justify-between w-[80%] h-[40px] mt-[20px] text-black text-sm rounded-sm">
                <Link href="/">
                  <button className="text-[18px] border p-2 text-center hover:text-blue-700 hover:bg-blue-300 text-[#2EA8C3] border-[#2EA8C3] rounded-sm w-[150px] h-full">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="text-[18px] font-[400px] text-[#000000] border text-center bg-blue-500 hover:bg-blue-300 hover:text-white rounded-sm w-[150px] h-full"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
