import "tailwindcss/tailwind.css";
import Tile from './components/tile';
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Tile />
    </div>
  )
}