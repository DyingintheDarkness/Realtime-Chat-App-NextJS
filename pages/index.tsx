import { useEffect } from "react";
import io, { Socket } from "socket.io-client";

const socketInitializer = async () => {
  await fetch("/api/socketio");
  let socket: Socket = io();
  socket.on("connect", () => {
    console.log("Connected");
  });
};

export default function Home() {
  useEffect(() => {
    socketInitializer();
  }, []);

  return <>Home</>;
}
