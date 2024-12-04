"use client";
import { Header } from "@/components/Header";
import { useState } from "react";
import { ExistingTickets } from "@/components/ExistingTickets";
import axios from "axios";
import { toast } from "react-toastify";

export default function NewTicket() {
  const [tickettype, setType] = useState("");
  const [ticketsummary, setSummary] = useState("");
  const [ticketdetails, setDetails] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/createticket",
        {
          tickettype,
          ticketsummary,
          ticketdetails,
          hours,
        }
      );
      setType("");
      setSummary("");
      setDetails("");
      setHours("");

      toast.success(res.data.message);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />

      <main className="flex flex-col sm:flex-row w-screen h-full overflow-hidden">
        <ExistingTickets />

        <section className="flex flex-row sm:mt-[70px] mt-8 sm:w-[45%] w-auto">
          <div className="flex flex-col w-[400px] border border-[#7D7D82] h-[550px] bg-[#FFFFFF] sm:ml-[30px] mb-5 sm:mb-2 ml-5 shadow-lg mr-[20px] items-center font-mono rounded-lg">
            <h2
              className="mt-[30px] font-mono text-black font-medium text-lg sm:mr-[136px] mr-20
            "
            >
              Create New Ticket
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full items-center mt-[20px]"
            >
              <fieldset className="w-[80%] h-[50px] border border-[#B4B4B8] px-3 text-sm rounded-md text-gray-700">
                <legend className="text-gray-700">Ticket Type</legend>
                <div className="flex justify-center gap-1 h-full">
                  <img
                    src="/images/Group 3.png"
                    alt="Ticket Type Icon"
                    className="w-6 h-6"
                  />
                  <select
                    className="w-full h-full text-md font-bold bg-transparent outline-none rounded-md mt-1"
                    value={tickettype}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Story">Story</option>
                    <option value="bug">Bug</option>
                    <option value="feature">Feature Request</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-[80%] h-[50px] border border-[#B4B4B8] mt-3  px-3 text-sm rounded-md text-gray-700">
                <legend className="text-gray-700">Summary</legend>
                <input
                  className="w-full h-full bg-transparent outline-none"
                  type="text"
                  value={ticketsummary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </fieldset>

              <fieldset className="w-[80%] min-h-[140px] max-h-[140px] mt-3  border border-[#B4B4B8] text-sm rounded-md text-gray-700">
                <legend className="text-gray-700 ml-[10px]">Details</legend>

                <textarea
                  name=""
                  id=""
                  onChange={(e) => setDetails(e.target.value)}
                  value={ticketdetails}
                  className="w-full min-h-full max-h-full text-sm rounded-md outline-none pl-1"
                ></textarea>
              </fieldset>

              <fieldset className="w-[80%] h-[50px] border border-[#B4B4B8] px-3 text-sm rounded-md text-gray-700">
                <legend className="text-gray-700">Hours</legend>
                <div className="flex justify-center gap-1 h-full">
                  <input
                    className="w-full h-full text-md bg-transparent outline-none border-r-2 mt-1"
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                  />
                  <img
                    src="/images/image 2.png"
                    alt="pointer Icon"
                    className="w-4 h-full mt-1"
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-[80%] h-[40px] mt-[30px] bg-[#2EA8C3] text-black text-sm rounded-md hover:text-white transition-all"
              >
                Save Ticket
              </button>
              <button
                type="reset"
                className="w-[80%] h-[40px] mt-[15px] border border-[#2EA8C3] text-[#2EA8C3] text-sm rounded-md hover:bg-blue-400 hover:text-white transition-all"
              >
                Cancel
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
