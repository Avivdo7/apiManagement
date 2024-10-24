import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Endpoint } from "./endpoint";
import { User } from "./user";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string = "";

  @OneToMany(() => Endpoint, (endpoint) => endpoint.organization)
  endpoints!: Endpoint[];

  @OneToMany(() => User, (user) => user.organization)
  users!: User[];
}
