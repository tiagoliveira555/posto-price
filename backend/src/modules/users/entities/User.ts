import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../shared/entities/BaseEntity";

@Entity("users")
export class User extends BaseEntity {
  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  username: string;

  @Column({ type: "varchar" })
  password: string;
}
