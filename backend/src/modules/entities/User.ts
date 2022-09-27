import { Column, Entity } from "typeorm";
import { Base } from "./Base";

@Entity("users")
export class User extends Base {
  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  username: string;

  @Column({ type: "varchar" })
  password: string;
}
