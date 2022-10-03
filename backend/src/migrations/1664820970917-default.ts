import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664820970917 implements MigrationInterface {
    name = 'default1664820970917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stations_gas" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "logitude" numeric NOT NULL, "latitude" numeric NOT NULL, "regular_gasoline" numeric(10,2) NOT NULL, "additive_gasoline" numeric(10,2) NOT NULL, "ethanol" numeric(10,2) NOT NULL, "diesel" numeric(10,2) NOT NULL, CONSTRAINT "PK_9b0a3539ccf59ab33315920cc09" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stations_gas"`);
    }

}
