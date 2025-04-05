import { Typography } from "@mui/material";
import React from "react";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";
import client from "@/api/axios.config";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, refetch } = useQuery({
    queryKey: ["joke"],
    queryFn: () =>
      client.get<{ joke: string }, { joke: string }>("/random", {
        headers: {
          Accept: "application/json",
        },
      }),
  });

  console.log({ data });
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant="h1Bold">{data?.joke}</Typography>
      <div className="card">
        <button onClick={() => refetch()}>Fetch Random Joke</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
