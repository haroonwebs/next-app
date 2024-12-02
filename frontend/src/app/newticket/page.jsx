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

      <main className="flex flex-row w-screen h-screen">
        <ExistingTickets />

        <section className="flex flex-row mt-[50px] w-[45%]">
          <div className="flex flex-col w-[400px] border h-[550px] bg-[#FFFFFF] ml-[30px] shadow-lg mr-[20px] items-center font-mono rounded-lg">
            <h2 className="mt-[30px] font-mono text-black font-medium text-lg">
              Create New Ticket
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full items-center mt-[30px]"
            >
              <select
                className="w-[80%] h-[40px] bg-[#D9D9D9] px-3 text-sm rounded-md outline-none text-gray-700"
                defaultValue=""
                value={tickettype}
                onChange={(e) => setType(e.target.value)}
              >
                <option disabled>Ticket Type</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
              </select>
              <input
                type="text"
                value={ticketsummary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Summary"
                className="w-[80%] h-[40px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
              />
              <textarea
                name=""
                id=""
                onChange={(e) => setDetails(e.target.value)}
                value={ticketdetails}
                className="w-[80%] min-h-[80px] max-h-[80px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
                placeholder="Details"
              ></textarea>
              <input
                type="number"
                name=""
                onChange={(e) => setHours(e.target.value)}
                value={hours}
                min="0.00"
                id=""
                placeholder="hours"
                className="w-[80%] h-[40px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
              />
              <button
                type="submit"
                className="w-[80%] h-[40px] mt-[30px] bg-[#2EA8C3] text-black text-sm rounded-sm hover:bg-blue-450 transition-all"
              >
                Save Ticket
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
