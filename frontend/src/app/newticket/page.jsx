"use client";
import { Header } from "@/components/Header";
import { useState } from "react";
import { ExistingTickets } from "@/components/ExistingTickets";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useTickets } from "../context/TicketContext";

export default function NewTicket() {
  const [tickettype, setType] = useState("");
  const [ticketsummary, setSummary] = useState("");
  const [ticketdetails, setDetails] = useState("");
  const [hours, setHours] = useState(0);

  const { updateTickets } = useTickets();

  // router hook for navigate to different pages
  const router = useRouter();

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

      console.log(res);

      const newTicket = res.data.data;
      console.log(newTicket);
      updateTickets(newTicket);

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

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <Header />

      <main className="flex flex-col lg:flex-row w-screen h-full overflow-hidden">
        <ExistingTickets />

        <section className="flex flex-row sm:mt-[50px] mt-8 mb-5 sm:w-[45%] w-full border-[#7D7D82]">
          <div className="flex flex-col w-[400px] border border-[#7D7D82] h-[550px] bg-[#FFFFFF]  mb-5 sm:mb-2 ml-5 shadow-lg mr-[20px] items-center font-mono rounded-lg">
            <h2
              className="mt-[39px] font-mono text-[#000000] font-[500px] text-[20px] lg:mr-[120px] mr-20
            "
            >
              Create new ticket
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full items-center mt-[10px] "
            >
              <fieldset className="w-[80%] h-[55px] border border-[#B4B4B8] px-3 text-sm rounded-[4px] text-gray-700">
                <legend className="text-[15px] font-[400px] text-[#424247]">
                  Ticket type
                </legend>
                <div className="flex justify-center gap-1 h-full">
                  <img
                    src="/images/Group 3.png"
                    alt="Ticket Type Icon"
                    className="w-6 h-6"
                  />
                  <select
                    className="w-full h-full text-[15px] font-[500px] bg-transparent outline-none mt-1"
                    value={tickettype}
                    placeholder="Select type.."
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="" disabled>
                      Select type..
                    </option>
                    <option value="Story">Story</option>
                    <option value="bug">Bug</option>
                    <option value="feature">Feature Request</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="w-[80%] h-[55px] border border-[#B4B4B8] mt-2  px-3 text-sm rounded-[4px] text-gray-700">
                <legend className="text-[15px] font-[400px] text-[#424247]">
                  Summary
                </legend>
                <input
                  className="w-full h-full bg-transparent outline-none"
                  type="text"
                  placeholder="Type here.."
                  value={ticketsummary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </fieldset>

              <fieldset className="w-[80%] min-h-[140px] max-h-[140px] mt-2 px-3  border border-[#B4B4B8] text-sm rounded-[4px] text-gray-700">
                <legend className="text-[15px] font-[400px] text-[#424247]">
                  Details
                </legend>

                <textarea
                  name=""
                  id=""
                  placeholder="Type here.."
                  onChange={(e) => setDetails(e.target.value)}
                  value={ticketdetails}
                  className="resize-none w-full min-h-[100px] max-h-full text-sm rounded-md outline-none pl-1"
                ></textarea>
              </fieldset>

              <fieldset className="w-[80%] h-[50px] border border-[#B4B4B8] mt-2 px-3 text-sm rounded-[4px] text-gray-700">
                <legend className="text-[15px] font-[400px] text-[#424247]">
                  Hours
                </legend>
                <div className="flex justify-center gap-1 h-full">
                  <input
                    className="w-full h-full text-[15px] font-[400px] placeholder-[#000000] bg-transparent outline-none border-r-2 mt-1"
                    type="number"
                    placeholder="0.00"
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
                className="w-[80%] h-[40px] mt-[30px] bg-[#2EA8C3] text-[#000000] font-[400px] text-[18px] rounded-[4px] hover:text-white transition-all"
              >
                Save Ticket
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="w-[80%] h-[40px] mt-[12px] border-2 border-[#2EA8C3] text-[#2EA8C3] font-[400px] text-[18px] rounded-[4px] hover:bg-blue-400 hover:text-white transition-all"
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
