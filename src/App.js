import "tailwindcss/tailwind.css";
import Tile from './components/tile';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Background } from './background.svg';
// TODO: put these into their own component and use this link to modify the viewports https://tailwindcss.com/docs/responsive-design#overview

export default function App() {
  return (
    <div className="App">
      <Background />
      {/* <Logo /> */}
      <Tile />
    </div>
  );
}