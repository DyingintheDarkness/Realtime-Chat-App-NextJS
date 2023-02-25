import { Http2SecureServer } from "http2";
import { Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: Http2SecureServer & {
      io: SocketIOServer;
    };
  };
};
