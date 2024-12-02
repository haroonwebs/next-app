import { Header } from "@/components/Header";
import { ExistingTickets } from "@/components/ExistingTickets";
import Timer from "@/components/Timer";
import { Design } from "@/components/Design";

export default function EditTicket() {
  return (
    <>
      <Header />

      <main className="flex flex-row w-screen h-screen">
        <ExistingTickets />

        {/* left section  */}

        <section className="flex flex-row mt-[50px] w-[45%]">
          <div className="flex flex-col w-[400px] border h-[550px] bg-[#FFFFFF] ml-[30px] shadow-lg mr-[20px] items-start font-mono rounded-lg">
            <div className="flex flex-row w-full border h-[40px] bg-[#FFFFFF] items-center font-mono rounded-t-lg">
              <Design />
              <div className="h-full w-full overflow-hidden pt-2">haroon</div>
            </div>
            {/* Header */}
            <h3 className="mt-[30px] font-mono text-black font-[500px] text-lg ml-[40px] ">
              Log time manually
            </h3>

            {/* Form */}
            <form className="flex flex-col w-full items-center mt-[10px]">
              <input
                type="number"
                name=""
                min="0.00"
                id=""
                placeholder="hours"
                className="w-[80%] h-[40px] bg-[#D9D9D9] mt-[20px] px-3 text-sm rounded-md outline-none"
              />

              <div className="flex w-full mt-[30px] marker:h-[40px] bg-[#FFFFFF] items-center justify-around font-mono text-sm ">
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
                <Timer />
              </div>

              <div className=" flex flex-row items-center justify-evenly w-[80%] h-[40px] mt-[20px]  text-black text-sm rounded-sm ">
                <button
                  type="reset"
                  className="underline text-lg text-gray-400"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="text-lg text-gray-400 border text-center  border-green-500 bg-[#1E8826] rounded-sm w-[100px] h-full"
                >
                  Start
                </button>
                <button className="underline text-lg text-gray-400">
                  Stop
                </button>
              </div>

              <textarea
                name=""
                id=""
                placeholder="Notes"
                className="w-[80%] min-h-[80px] max-h-[80px] mt-[20px] bg-white text-black text-sm rounded-sm border outline-none"
              ></textarea>

              <div className=" flex flex-row items-center justify-around w-[80%] h-[40px] mt-[20px]  text-black text-sm rounded-sm ">
                <button className="text-lg border text-center text-blue-500 border-blue-500 rounded-sm w-[130px] h-full">
                  Cancel{" "}
                </button>
                <button className="text-lg text-gray-400 border text-center bg-blue-500 rounded-sm w-[130px] h-full">
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
