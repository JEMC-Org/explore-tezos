import React from "react";
import "tailwindcss/tailwind.css";
import TileList from "./components/tileList";
import Header from "./components/header";

export default function App() {
  return (
    <div>
      <head>
        <title>Explore Tezos</title>
      </head>
      <body>
        <Header />
        <TileList />
      </body>
    </div>
  );
}
