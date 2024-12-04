import { application, Request, Response } from "express";
import { Ticket } from "../Models /ticketModel"; // Ensure the path is correct
import { AppDataSource } from "../dbConnect";

// create new ticket api

export const createTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { tickettype, ticketsummary, ticketdetails, hours } = req.body as {
      tickettype: string;
      ticketsummary: string;
      ticketdetails: string;
      hours: number;
    };
    console.log(ticketdetails, ticketsummary, tickettype, hours);

    if (!tickettype || !ticketsummary || !ticketdetails || !hours) {
      res.status(403).json({
        success: false,
        message: "Please fill complete form with valid data",
      });
      return;
    }

    const ticketRepository = AppDataSource.getRepository(Ticket);

    const newTicket = ticketRepository.create({
      tickettype,
      ticketsummary,
      ticketdetails,
      hours,
    });

    const savedTicket = await ticketRepository.save(newTicket);
    if (!savedTicket) {
      res.status(400).json({
        success: false,
        message: "error while saving Ticket",
      });
      return;
    }
    {
      res.status(201).json({
        success: true,
        message: "Ticket created successfully",
        data: savedTicket,
      });
    }
  } catch (error: unknown) {
    console.error("Error creating ticket:", error);

    res.status(500).json({
      success: false,
      message: "Error creating ticket",
    });
    return;
  }
};

// get all tickets api
export const getAllTickets = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ticketRepository = AppDataSource.getRepository(Ticket);

    if (!ticketRepository) {
      res.status(403).json({
        sussess: false,
        message: "Error While fetching TicketRepository",
      });
      return;
    }

    const allTickets = await ticketRepository.find({
      order: {
        id: "ASC",
      },
    });
    if (!allTickets || allTickets.length === 0) {
      res.status(404).json({
        success: false,
        message: "Tickets Not Available",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Tickets successfuly Fetched",
      data: allTickets,
    });
  } catch (error: unknown) {
    console.error("Error While fetching All Tickets", error);
    res.status(403).json({
      success: false,
      message: `internal server error: ${error}`,
    });
  }
};

// update ticket api

export const editTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ticketId = parseInt(req.params.id);
    if (!ticketId) {
      res.status(404).json({
        success: false,
        message: "Please Porvide Ticket id",
      });
      return;
    }
    const editRepositery = AppDataSource.getRepository(Ticket);
    const ticketExist = await editRepositery.findOne({
      where: { id: ticketId },
    });
    if (!ticketExist) {
      res.status(404).json({
        success: false,
        message: "Ticket is not Exist against this Id",
      });
      return;
    }

    const { tickettype, ticketsummary, ticketdetails, hours } = req.body as {
      tickettype: string;
      ticketsummary: string;
      ticketdetails: string;
      hours: number;
    };

    // if (!hours || !ticketdetails) {
    //   res.status(403).json({
    //     success: false,
    //     message: "Ticket Details and Time is Required",
    //   });
    //   return;
    // }

    const updateTicket = Object.assign(ticketExist, {
      tickettype,
      ticketsummary,
      ticketdetails,
      hours,
    });
    if (!updateTicket) {
      res.status(403).json({
        success: false,
        message: " update Ticket Object is not updated ",
      });
      return;
    }
    const updatedTicket = await editRepositery.save(updateTicket);

    if (!updatedTicket) {
      res.status(403).json({
        success: false,
        message: " Error while Updating and Saving ",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: " Ticket Updated Successfuly",
      data: updatedTicket,
    });
  } catch (error: unknown) {
    console.error(" internal server error", error);
    res.status(500).json({
      success: false,
      message: " Internal server error ",
    });
  }
};
