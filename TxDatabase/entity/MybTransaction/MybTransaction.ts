import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { MyBEvent } from "../MybEvent/MybEvent";

@Entity()
export class MybTransaction {
  @PrimaryColumn()
  hash: string;
  @Column()
  blockHash: string;
  @Column()
  blockNumber: number;
  @Column({ nullable: true })
  to: string;
  @Column()
  data: string;
  @Column()
  from: string;
  @Column()
  gasLimit: string;
  @Column()
  gasPrice: string;
  @Column()
  nonce: number;
  @Column()
  value: string;
  @OneToMany(type => MyBEvent, event => event.tx)
  events: MyBEvent[];
}
