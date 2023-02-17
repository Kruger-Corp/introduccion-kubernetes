import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_game')
export class Game {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  name: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  description: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  views: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  cover: string;
}
