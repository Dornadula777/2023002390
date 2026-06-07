"use client";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const createNotification = async () => {
    try {
      const response = await fetch("/api/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          message,
        }),
      });

      const data = await response.json();

      alert("Notification Created");
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Notification App</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={createNotification}>
        Create Notification
      </button>
    </div>
  );
}