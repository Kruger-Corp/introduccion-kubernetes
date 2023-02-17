import { Controller, Get } from '@nestjs/common';
import { Game } from '../entities/game.entity';
import { GameService } from '../services/game.service';

@Controller('games')
export class GameController {
  constructor(private _gameService: GameService) {}

  @Get()
  findAll(): Promise<Game[]> {
    return this._gameService.findAll();
  }
}
