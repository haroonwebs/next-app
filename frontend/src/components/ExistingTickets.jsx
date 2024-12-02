"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <section className="w-[55%]">
      <p className="ml-[84px] text-xl font-mono mt-[50px] font-[500px]">
        Existing Tickets
      </p>
      <div className="flex flex-row mt-[20px] font-mono">
        <table className="ml-[84px] w-[580px] bg-[#F8F8F8]">
          <thead>
            <tr className="border-b-2 ">
              <th className="border-r-2">Tickets</th>
              <th>Time Log</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b-2">
                  <td className="border-r-2">{ticket.ticketdetails}</td>

                  <td>{ticket.hours}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No tickets available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
