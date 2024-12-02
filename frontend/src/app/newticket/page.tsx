import { Header } from "@/components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";

export default function NewTicket() {
  return (
    <>
      <Header />

      <main className="flex flex-row w-screen h-screen">
        <ExistingTickets />

        {/* left section  */}

        <section className="flex flex-row mt-[50px] w-[45%]">
          <div className="flex flex-col w-[400px] border h-[550px] bg-[#FFFFFF] ml-[30px] shadow-lg mr-[20px] items-center font-mono rounded-lg">
            {/* Header */}
            <h2 className="mt-[30px] font-mono text-black font-medium text-lg">
              Create New Ticket
            </h2>

            {/* Form */}
            <form className="flex flex-col w-full items-center mt-[30px]">
              {/* Selection Box */}
              <select
                className="w-[80%] h-[40px] bg-[#D9D9D9] px-3 text-sm rounded-md outline-none text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Ticket Type
                </option>
                <option value="bug">Bug</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
              </select>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Summary"
                className="w-[80%] h-[40px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
              />
              <textarea
                name=""
                id=""
                className="w-[80%] min-h-[80px] max-h-[80px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
                placeholder="Details"
              ></textarea>

              <input
                type="number"
                name=""
                min="0.00"
                id=""
                placeholder="hours"
                className="w-[80%] h-[40px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
              />

              {/* Submit Button */}
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
