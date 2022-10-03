import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../shared/entities/BaseEntity";

@Entity("stations_gas")
export class Station extends BaseEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "decimal" })
  logitude: number;

  @Column({ type: "decimal" })
  latitude: number;

  @Column({
    type: "decimal",
    name: "regular_gasoline",
    precision: 10,
    scale: 2,
  })
  regularGasoline: number;

  @Column({
    type: "decimal",
    name: "additive_gasoline",
    precision: 10,
    scale: 2,
  })
  additiveGasoline: number;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  ethanol: number;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  diesel: number;
}
