import React from "react";
import { Design } from "@/components/Design";

export const ExistingTickets = () => {
  return (
    <section className="w-[55%]">
      <p className="ml-[84px] text-xl font-mono mt-[50px] font-[500px]">
        Existing Tickets
      </p>
      <div className="flex flex-row mt-[20px] font-mono">
        <table className="ml-[84px] w-[580px] bg-[#F8F8F8]">
          <tr className="border-b-2 ">
            <td className="border-r-2">Tickets</td>
            <td>Time Log</td>
          </tr>
          {/* here is the table rows for map functions */}
          <tr className="border-b-2">
            <td className="border-r-2 flex flex-row">
              <Design />
              map Ticket
            </td>
            <td>map.log</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
