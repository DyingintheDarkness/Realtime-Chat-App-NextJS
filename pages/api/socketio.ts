// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO, Socket } from "socket.io";
import { NextApiResponseServerIO } from "../../types/socket";

export const config = {
  api: { bodyParser: false },
};

export default async function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  let io = res.socket.server.io;
  if (!io) {
    const io = new ServerIO(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket: Socket) => {
      console.log("Client connected");
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }
  res.end();
}
