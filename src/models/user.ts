import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Organization } from "./organization";
import { Endpoint } from "./endpoint";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @ManyToOne(() => Organization, (organization) => organization.users)
  organization: Organization;

  @ManyToOne(() => Endpoint, (endpoint) => endpoint.users)
  endpoint: Endpoint;

  constructor(name: string, organization: Organization, endpoint: Endpoint) {
    this.name = name;
    this.organization = organization;
    this.endpoint = endpoint;
  }
}
