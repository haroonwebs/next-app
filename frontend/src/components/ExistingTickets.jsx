"use client";
import Link from "next/link";
import { useTickets } from "@/app/context/TicketContext";

export const ExistingTickets = () => {
  const { tickets } = useTickets();

  return (
    <section className="sm:w-[100%] lg:w-[55%] w-screen overflow-hidden lg:ml-[70px] lg:mr-8 ml-1 mr-1">
      <p className="sm:ml-[20px] sm:text-xl font-mono text-[#000000] sm:mt-[50px] mt-5 sm:font-[500px] font-[500px]">
        Existing tickets
      </p>
      <div className="flex flex-row sm:mt-[20px] mt-[10px] font-mono rounded-md">
        <div className="w-full bg-white overflow-hidden">
          <div className="lg:max-h-[300px] max-h-[300px] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="sm:border-b-2 border-b-4 ">
                  <th className="sm:border-r-2 border-r-4 text-[13px] text-[#000000] px-4 py-2 font-normal text-left w-[70%]">
                    <i>Tickets</i>
                  </th>
                  <th className="px-4 py-2 text-[13px] text-[#000000] text-left font-normal w-[30%]">
                    {" "}
                    <i>Time Logged</i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.length > 0 ? (
                  tickets.map((ticket) => (
                    <tr
                      key={ticket.id}
                      className="border-b-2 w-full hover:bg-slate-200"
                    >
                      <Link
                        href={{
                          pathname: "/edit-ticket",
                          query: {
                            id: ticket.id,
                            tickettype: ticket.tickettype,
                            hours: ticket.hours,
                          },
                        }}
                      >
                        <td className="border-r-2 sm:px-4 py-2  flex items-center overflow-visible">
                          <div className="h-full sm:w-[100px] flex items-center">
                            <img src="/images/Group 3.png" alt="ticket logo" />

                            <div className="sm:text-sm text-[8px] text-[#000000] sm:font-[500px] font-bold sm:ml-2 ml-1">
                              Tech-<span>{ticket.id}</span>
                            </div>
                          </div>
                          {/* <span className="font-bold">{ticket.id}</span> */}
                          <span className="ml-2 sm:text-[13px] text-[8px] text-[#000000] font-semibold sm:font-medium ">
                            {ticket.tickettype}
                          </span>
                        </td>
                      </Link>
                      <td className="sm:px-4 px-2 py-2 whitespace-nowrap overflow-visible">
                        {ticket.hours > 0 ? (
                          <span className="sm:text-[13px] text-[#000000] text-[10px] sm:font-[400px]">
                            {ticket.hours}h
                          </span>
                        ) : (
                          <>
                            <span className="sm:mr-2 mr-1 sm:text-[13px] text-[#000000] text-[10px] font-[400px]">
                              No time log.
                            </span>
                            <Link
                              href={{
                                pathname: "/edit-ticket",
                                query: {
                                  id: ticket.id,
                                  tickettype: ticket.tickettype,
                                  hours: ticket.hours,
                                },
                              }}
                              className="text-[#000000] text-[13px] underline font-normal
                               hover:text-blue-600 hover:no-underline"
                            >
                              Log time
                            </Link>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      className=" text-[#000000] text-[13px] text-center px-4 py-2"
                    >
                      No tickets available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
