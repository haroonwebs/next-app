"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Design } from "@/components/Design";

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
    <section className="w-[55%] overflow-hidden">
      <p className="ml-[20px] text-xl font-mono mt-[50px] font-medium">
        Existing Tickets
      </p>
      <div className="flex flex-row mt-[20px] font-mono">
        <div className="w-full bg-[#F8F8F8] overflow-hidden">
          {/* Set fixed height and enable scrolling */}
          <div className="max-h-[300px] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="border-r-2 px-4 py-2 text-left w-[70%]">
                    Tickets
                  </th>
                  <th className="px-4 py-2 text-left w-[30%]">Time Log</th>
                </tr>
              </thead>
              <tbody>
                {tickets.length > 0 ? (
                  tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b-2">
                      <td className="border-r-2 px-4 py-2 flex items-center overflow-visible">
                        <Design />
                        <span className="ml-2">{ticket.ticketdetails}</span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap overflow-visible">
                        {ticket.hours > 0 ? (
                          <span>{ticket.hours}</span>
                        ) : (
                          <Link
                            href="/edit-ticket"
                            className="text-slate-600 underline"
                          >
                            log ticket
                          </Link>
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
