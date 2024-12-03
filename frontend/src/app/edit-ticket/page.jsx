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

      <main className="flex flex-row w-screen h-screen">
        <ExistingTickets />

        <section className="flex flex-row mt-[50px] w-[45%] border-[#7D7D82]">
          <div className="flex flex-col w-[400px] border border-[#7D7D82] h-[550px] bg-[#FFFFFF] ml-[30px] shadow-lg mr-[20px] items-start font-mono rounded-lg">
            <div className="flex flex-row w-full border h-[40px] bg-[#FFFFFF] items-center font-mono rounded-t-lg">
              <div className="h-full w-[150px] flex items-center">
                <div className="flex items-center justify-center w-[30px] h-full bg-green-600">
                  <div className="w-[15px] h-[15px] bg-white flex items-center justify-center text-black rounded-full"></div>
                </div>

                <div className="text-sm text-black font-bold ml-2">
                  Tech-<span>{id}</span>
                </div>
              </div>
              <div className="h-full w-full overflow-hidden pt-2">
                {ticketdetails}
              </div>
            </div>

            <h3 className="mt-[30px] font-mono text-black font-[300px] text-md ml-[40px] ">
              Log time manually
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full items-center "
            >
              <input
                type="number"
                name=""
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                min="0.00"
                id=""
                placeholder="0.00"
                className="w-[80%] h-[40px] border border-[#B4B4B8] bg-[#FFFFFF] text-black mt-[20px] px-2 font-[300px] text-md rounded-md outline-none"
              />

              <div className="flex w-full mt-[20px] marker:h-[40px] bg-[#FFFFFF] items-center justify-around font-mono text-sm ">
                <span>Track with Timer</span>
                <span className="underline text-blue-600">
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

              <textarea
                name=""
                id=""
                onChange={(e) => setDetails(e.target.value)}
                value={ticketdetails}
                placeholder="Notes"
                className="w-[80%] min-h-[80px] max-h-[80px] mt-[20px] bg-white text-black text-sm rounded-sm border outline-none"
              ></textarea>

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
