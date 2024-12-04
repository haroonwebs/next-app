"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export const ExistingTickets = () => {
  const [tickets, setTickets] = useState([]);

  const getAllTickets = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/alltickets");
      console.log(res);
      if (res.data && res.data.success) {
        setTickets(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTickets();
  }, []);

  return (
    <section className="sm:w-[55%] w-screen overflow-hidden sm:ml-[70px] sm:mr-8 ml-1 mr-1">
      <p className="sm:ml-[20px] sm:text-xl font-mono sm:mt-[50px] mt-5 sm:font-medium font-bold">
        Existing Tickets
      </p>
      <div className="flex flex-row sm:mt-[20px] mt-[10px] font-mono rounded-md">
        <div className="w-full bg-[#F8F8F8] overflow-hidden">
          <div className="max-h-[300px] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="sm:border-b-2 border-b-4 ">
                  <th className="sm:border-r-2 border-r-4  px-4 py-2 font-normal text-left w-[70%]">
                    <i>Tickets</i>
                  </th>
                  <th className="px-4 py-2 text-left font-normal w-[30%]">
                    {" "}
                    <i>Time Log</i>
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
                      <td className="border-r-2 sm:px-4 py-2  flex items-center overflow-visible">
                        <div className="h-full sm:w-[100px] flex items-center">
                          <img src="/images/Group 3.png" alt="ticket logo" />

                          <div className="sm:text-sm text-[8px] text-black sm:font-bold font-bold sm:ml-2 ml-1">
                            Tech-<span>{ticket.id}</span>
                          </div>
                        </div>
                        {/* <span className="font-bold">{ticket.id}</span> */}
                        <span className="ml-2 sm:text-[13px] text-[8px] font-semibold sm:font-medium ">
                          {ticket.ticketdetails}
                        </span>

                        {/* responsiveness complete there */}
                      </td>
                      <td className="sm:px-4 px-2 py-2 whitespace-nowrap overflow-visible">
                        {ticket.hours > 0 ? (
                          <span className="sm:text-[13px] text-[10px] sm:font-[400px]">
                            {ticket.hours}h
                          </span>
                        ) : (
                          <>
                            <span className="sm:mr-2 mr-1 sm:text-[13px] text-[10px] font-[400px]">
                              No time log.
                            </span>
                            <Link
                              href={{
                                pathname: "/edit-ticket",
                                query: {
                                  id: ticket.id,
                                  details: ticket.ticketdetails,
                                  hours: ticket.hours,
                                },
                              }}
                              className="sm:text-slate-600 text-[12px] underline hover:text-blue-600 hover:no-underline"
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
                    <td colSpan="2" className="text-center px-4 py-2">
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
