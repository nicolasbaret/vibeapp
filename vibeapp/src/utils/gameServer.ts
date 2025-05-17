import { gameModel } from '../models/gameModel';

type Player = {
  id: number;
  isReady: boolean;
};

class GameServer {
  private playerCount: number = 0;

  setPlayerCount(count: number) {
    this.playerCount = count;
    return this.playerCount;
  }

  getPlayerCount(): number {
    return this.playerCount;
  }
}

export const gameServer = new GameServer();