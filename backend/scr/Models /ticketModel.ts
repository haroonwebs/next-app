import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  tickettype: string = "";

  @Column()
  ticketsummary: string = "";

  @Column()
  ticketdetails: string = "";

  @Column("float")
  hours: number = 0;
}
