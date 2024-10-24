import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Organization } from "./organization";
import { User } from "./user";

@Entity()
export class Endpoint {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @ManyToOne(() => Organization, (organization) => organization.endpoints)
  organization: Organization;

  @OneToMany(() => User, (user) => user.endpoint)
  users!: User[];

  constructor(id: string, name: string, organization: Organization) {
    this.name = name;
    this.organization = organization;
  }
}
