class Overworld {
  constructor(gameConf) {
    this.gameElement = gameConf.gameElement;
    this.gameCanvas = document.querySelector(".game-canvas");
    this.gameCTX = this.gameCanvas.getContext("2d");
  }

  init() {
    const floorMap = new Image();
    floorMap.onload = () => {
      this.gameCTX.drawImage(floorMap, 0, 0);
    };

    floorMap.src = "/assets/images/maps/DemoLower.png";

    const heroSprite = new Image();

    const posX = 5;
    const posY = 6;

    const heroShadow = new Image();

    heroShadow.onload = () => {
      this.gameCTX.drawImage(
        heroShadow,
        0,
        0,
        32,
        32,
        posX * 16 - 8,
        posY * 16 - 18,
        32,
        32
      );
    };

    heroShadow.src = "/assets/images/characters/shadow.png";

    heroSprite.onload = () => {
      this.gameCTX.drawImage(
        heroSprite,
        0,
        0,
        32,
        32,
        posX * 16 - 8,
        posY * 16 - 18,
        32,
        32
      );
    };

    heroSprite.src = "/assets/images/characters/people/hero.png";
  }
}
