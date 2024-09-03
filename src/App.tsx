import { OpponentNejlaNew } from "./opponents/OppoenentNejlaNew";
import { OpponentRunarRandom } from "./opponents/OpponentRunarRandom";
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

// const game = new Game(ReactUi, opponents, {});
// game.run();

function App() {
  return null;
}

export default App;
