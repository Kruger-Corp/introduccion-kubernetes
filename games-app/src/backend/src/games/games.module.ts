import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameController } from './controllers/game.controller';
import { Game } from './entities/game.entity';
import { GameRepository } from './repositories/game.repository';
import { GameService } from './services/game.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameRepository, GameService],
  controllers: [GameController],
})
export class GamesModule {}
