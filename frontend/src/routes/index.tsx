import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import "../App.css";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [message, setMessage] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:4000/api");
        const data = await response.json();
        setMessage(data.message);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch data from the API");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <p>IsLoading</p> : <p>{message}</p>}
      <p>Message from API {message}</p>
    </div>
  );
}
