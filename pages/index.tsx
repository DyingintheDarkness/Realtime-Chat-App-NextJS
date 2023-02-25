import { NextPageContext } from "next";
import { useEffect } from "react";
import io, { Socket } from "socket.io-client";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

const dbInstance = collection(db, "users");

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
    (async () => {
      let test = await addDoc(dbInstance, {
        notes: "jello",
      });
      console.log(test)
    })();
  }, []);

  return <>Home</>;
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {},
  };
}
