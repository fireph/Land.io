import { Engine, Loader, vec, Input } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
  constructor() {
    super({width: 800, height: 600});
  }
  initialize() {
    
    const playerSpeed = 20;
    const playerVel = vec(0, 0);
    const player = new Player();
    this.add(player);

    const loader = new Loader([Resources.Sword]);
    this.start(loader);

    this.input.keyboard.on("press", (event) => {
      if (event.key === Input.Keys.ArrowLeft) {
        playerVel.x = -playerSpeed;
        playerVel.y = 0;
      } else if (event.key === Input.Keys.ArrowRight) {
        playerVel.x = playerSpeed;
        playerVel.y = 0;
      } else if (event.key === Input.Keys.ArrowUp) {
        playerVel.x = 0;
        playerVel.y = -playerSpeed;
      } else if (event.key === Input.Keys.ArrowDown) {
        playerVel.x = 0;
        playerVel.y = playerSpeed;
      } else if (event.key === Input.Keys.Space) {
        playerVel.x = 0;
        playerVel.y = 0;
      }
      player.vel = playerVel;
    })
  }
}
  
export const game = new Game();
game.initialize();