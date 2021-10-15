import React from "react";
import "tailwindcss/tailwind.css";
import TileList from "./components/tileList";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Header />
      <TileList />
      <Footer />
    </div>
  );
}
