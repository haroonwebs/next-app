import express from "express";
import {
  createTicket,
  getAllTickets,
  editTicket,
} from "../controllers/ticketControllers";

const router = express.Router();

router.post("/createticket", createTicket);
router.get("/alltickets", getAllTickets);
router.put("/tickets/:id", editTicket);

export default router;
