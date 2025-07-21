import Game from "../Game";
import Header from "../Header";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
