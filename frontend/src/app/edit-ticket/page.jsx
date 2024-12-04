"use client";
import { Header } from "@/components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditTicket() {
  const searchParams = useSearchParams();
  const [hours, setHours] = useState("");
  const [ticketdetails, setDetails] = useState("");

  useEffect(() => {
    const logDetails = searchParams.get("details") || "";
    const logHours = searchParams.get("hours") || "";

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
          ticketdetails,
        }
      );
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

  return (
    <>
      <Header />

      <main className="flex flex-col sm:flex-row w-screen h-full overflow-hidden">
        <ExistingTickets />{" "}
        <section className="flex flex-row sm:mt-[50px] mt-8 sm:w-[45%] w-full border-[#7D7D82]">
          <div className="flex flex-col w-[400px] border border-[#7D7D82] h-[580px] bg-[#FFFFFF] sm:ml-[30px] ml-5 mb-5 shadow-lg mr-[20px] items-start font-mono rounded-lg">
            <div className="flex flex-row w-full border min-h-[40px] bg-[#FFFFFF] items-center font-mono rounded-t-lg">
              <div className="h-full w-[150px] flex items-center">
                <img
                  className="ml-4"
                  src="/images/Group 3.png"
                  alt="ticket logo"
                />
                <span className="text-sm text-black font-bold ml-2">TECH-</span>
                <span className="text-sm text-black font-bold">{id}</span>
              </div>
              <div className="flex h-full w-full overflow-hidden text-nowrap p-[10px] text-[14px]">
                {ticketdetails}
              </div>
            </div>

            <h3 className="mt-[30px] font-mono text-black font-[400px] text-[18px]  ml-[40px] ">
              Log time manually
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-full items-center mt-2"
            >
              <div className="w-[80%] p-1 h-[37px] flex items-center border border-[#B4B4B8] rounded-[4px]">
                <input
                  type="number"
                  name=""
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  min="0.00"
                  id=""
                  placeholder="0.00"
                  className="w-full h-full  bg-[#FFFFFF] text-black px-1 border-r-2 font-[300px] text-md outline-none"
                />
                <img
                  src="/images/image 2.png"
                  alt=""
                  className="w-6 h-4 p-[2px]"
                />
              </div>

              <div className="flex sm:flex-row flex-col w-[90%] mt-[20px] h-4 sm:items-center sm:justify-between items-center justify-between font-mono text-sm ">
                <span>Track with Timer</span>
                <span className="underline text-[#103BA3]">
                  Use count down timer
                </span>
              </div>

              <div
                name=""
                id=""
                className="flex flex-row justify-center items-center w-[80%] min-h-[80px] max-h-[80px] mt-[20px] px-3 text-sm rounded-md outline-none"
              >
                <div className="flex flex-row justify-center items-center w-[80%] min-h-[80px] max-h-[80px] mt-[20px] px-3 text-sm ">
                  <div className="flex w-[50px] h-[60px] items-center justify-center">
                    <select className="w-full outline-none h-full text-[30px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm">
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-lg text-slate-400">:</span>
                  <div className="flex w-[50px] h-[60px] items-center justify-center">
                    <select className="w-full outline-none h-full text-[30px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm">
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-lg text-slate-400">:</span>
                  <div className="flex w-[50px] h-[60px] items-center justify-center">
                    <select className="w-full outline-none h-full text-[30px] appearance-none text-center bg-transparent border border-gray-300 rounded-sm">
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className=" flex flex-row items-center justify-evenly w-[80%] h-[40px] mt-[20px]  text-black text-sm rounded-sm ">
                <button
                  type="reset"
                  className="underline text-lg text-gray-400 hover:text-gray-600"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="text-lg text-white border text-center  border-green-500 hover:bg-green-700 bg-[#1E8826] rounded-sm w-[100px] h-full"
                >
                  Start
                </button>
                <button className="underline text-lg text-gray-400 hover:text-gray-600">
                  Stop
                </button>
              </div>

              <div className="w-[80%] bg-gray-200 h-[2px] text-sm rounded-sm border mt-5"></div>

              <fieldset className="w-[80%] min-h-[100px] max-h-[100px] mt-3  border border-[#B4B4B8]  text-sm rounded-md text-gray-700">
                <legend className="text-gray-700 ml-2">Notes</legend>

                <textarea
                  name=""
                  id=""
                  onChange={(e) => setDetails(e.target.value)}
                  value={ticketdetails}
                  className="w-full min-h-full max-h-full px-3 text-sm rounded-md outline-none"
                ></textarea>
              </fieldset>

              <div className=" flex flex-row items-center justify-around w-[80%] h-[40px] mt-[20px]  text-black text-sm rounded-sm ">
                <Link href="/">
                  <button className="text-lg border p-1 text-center hover:text-blue-700 hover:bg-blue-300 text-blue-500 border-blue-500 rounded-sm w-[130px] h-full">
                    Cancel{" "}
                  </button>
                </Link>

                <button
                  type="submit"
                  className="text-lg text-black border text-center bg-blue-500 hover:bg-blue-300 hover:text-white rounded-sm w-[130px] h-full"
                >
                  {" "}
                  Save{" "}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
