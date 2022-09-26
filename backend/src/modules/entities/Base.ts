import { CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export class Base {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
