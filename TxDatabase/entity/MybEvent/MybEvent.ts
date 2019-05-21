import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MybTransaction } from "../MybTransaction/MybTransaction";

@Entity()
export class MyBEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hash: string;

  @Column({ nullable: true })
  p0: string;

  @Column({ nullable: true })
  p1: string;

  @Column({ nullable: true })
  p2: string;

  @Column({ nullable: true })
  p3: string;

  @Column()
  timestamp: number;

  @Column()
  blockNumber: number;

  @ManyToOne(type => MybTransaction, tx => tx.events)
  tx: MybTransaction;

  @Column({ nullable: true })
  isLock: boolean
}
