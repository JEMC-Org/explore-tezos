import React from "react";
import "tailwindcss/tailwind.css";
import TileList from "./components/tileList";
import Header from "./components/header";
import Footer from "./components/footer";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="bg-primary">
      <Helmet bodyAttributes={{ style: "background-color:#263042" }} />
      <Header />
      <TileList />
      <Footer />
    </div>
  );
}
