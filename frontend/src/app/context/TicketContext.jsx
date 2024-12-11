"use client";

import { useContext, createContext, useState, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    console.log(storedTickets);
    if (storedTickets) {
      setTickets(storedTickets);
    }
  }, []);

  // const addTicket = (newTickets) => {
  //   const addTicket = [...tickets, newTickets];

  //   setTickets(addTicket);
  //   localStorage.setItem("tickets", JSON.stringify(addTicket));
  // };

  const addTicket = (newTickets) => {
    const updatedTickets = Array.isArray(newTickets)
      ? newTickets
      : [...tickets, newTickets];
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const editTicket = (updateTicket) => {
    const updateticket = tickets.map((ticket) =>
      ticket.id === updateTicket.id ? updateticket : ticket
    );
    setTickets(updateticket);
    localStorage.setItem("tickets", JSON.stringify(updateTicket));
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, editTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);
