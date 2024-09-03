import { useEffect, useState } from "react";
import Game from "./game/Game";
import { OpponentNejlaNew } from "./opponents/OppoenentNejlaNew";
import { OpponentRunarRandom } from "./opponents/OpponentRunarRandom";
import ReactUi from "./ReactUi";
import { OpponentInitializer } from "./types";

const opponents: OpponentInitializer[] = [
  {
    id: 1,
    name: "Runar Random",
    difficulty: "Very Easy",
    constructor: OpponentRunarRandom,
  },
  {
    id: 2,
    name: "Nejla New",
    difficulty: "Easy",
    constructor: OpponentNejlaNew,
  },
];

const ui = new ReactUi();
const game = new Game(ui, opponents, {});
game.run();

function App() {
  const [_x, setX] = useState(true);

  useEffect(() => {
    const rerenderCb = () => setX((x) => !x);
    ui.setRerenderCb(rerenderCb);
  }, []);
  console.log(ui.currentJsx);

  return <>{ui.render()}</>;
}

export default App;
