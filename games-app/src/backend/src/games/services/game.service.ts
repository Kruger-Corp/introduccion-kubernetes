import { Injectable } from '@nestjs/common';
import { Game } from '../entities/game.entity';
import { GameRepository } from '../repositories/game.repository';

@Injectable()
export class GameService {
  constructor(private _gameRepository: GameRepository) {}

  findAll(): Promise<Game[]> {
    return this._gameRepository.findAll();
  }
}
