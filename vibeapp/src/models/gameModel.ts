import { gameServer } from '../utils/gameServer';

class GameModel {
  getRandomPlayer(): number {
    const playerCount = gameServer.getPlayerCount();
    if (playerCount < 2) return 0;
    
    // Generate random number between 1 and playerCount
    return Math.floor(Math.random() * playerCount) + 1;
  }

  initializeGame(playerCount: number) {
    gameServer.setPlayerCount(playerCount);
  }
}

export const gameModel = new GameModel();