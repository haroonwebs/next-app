"use client";

import { useContext, createContext, useState, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    if (storedTickets) {
      setTickets(storedTickets);
    }
  }, []);

  const updateTickets = (newTickets) => {
    const updatedTickets = Array.isArray(newTickets)
      ? newTickets
      : [...tickets, newTickets];
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  return (
    <TicketContext.Provider value={{ tickets, updateTickets }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);
