import React from "react";
import "tailwindcss/tailwind.css";
import TileList from "./components/tileList";
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TileList />
    </div>
  );
}
