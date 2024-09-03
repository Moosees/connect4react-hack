import {
  BoardMatrix,
  GameOptions,
  OpponentInitializer,
  UIStartChoices,
  UserInterface,
} from "./types";

export default class ReactUi implements UserInterface {
  currentJsx;
  rrCb;

  constructor() {
    this.currentJsx = <div>Hej</div>;
    this.rrCb = () => {};
  }

  setRerenderCb(cb: () => void) {
    this.rrCb = cb;
  }

  paintStart(): Promise<UIStartChoices> {
    console.log("in paintStart");
    return new Promise((resolve) => {
      this.currentJsx = (
        <button onClick={() => resolve("options")}>Start</button>
      );
      this.rrCb();
    });
  }

  paintOptions(
    options: GameOptions,
    opponents: OpponentInitializer[],
  ): Promise<GameOptions> {
    console.log("in paintOptions");
    return new Promise((resolve) => {
      this.currentJsx = (
        <div>
          {options.p1.name}
          {opponents[0].name}
          <button onClick={() => resolve(options)}></button>
        </div>
      );
      this.rrCb();
    });
  }

  async paintTokenDropper(
    playerName: string,
    fullColumns: boolean[],
  ): Promise<number> {
    this.currentJsx = (
      <div>
        {playerName}
        {fullColumns.length}
      </div>
    );

    return 1;
  }

  paintBoard(board: BoardMatrix): "done" {
    this.currentJsx = <div>{board[0][0]}</div>;

    return "done";
  }

  render() {
    return this.currentJsx;
  }
}
