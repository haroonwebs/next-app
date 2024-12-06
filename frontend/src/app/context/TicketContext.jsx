"use client";

import { useContext, createContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const updateTickets = (NewTicket) => setTickets(NewTicket);

  return (
    <TicketContext.Provider value={{ tickets, updateTickets }}>
      {children}
    </TicketContext.Provider>
  );
};
export const useTickets = () => useContext(TicketContext);
