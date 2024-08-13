import { MigrationInterface, QueryRunner } from "typeorm";

export class UserRoleTable1723580407620 implements MigrationInterface {
    name = 'UserRoleTable1723580407620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "userroles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "roleId" uuid NOT NULL, CONSTRAINT "REL_93ff56f9d18997faacbeea7253" UNIQUE ("userId"), CONSTRAINT "PK_0f5953feb835cabaab6de9f4148" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "userroles" ADD CONSTRAINT "FK_93ff56f9d18997faacbeea72539" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userroles" ADD CONSTRAINT "FK_149176f0dd68297c0066248ff98" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userroles" DROP CONSTRAINT "FK_149176f0dd68297c0066248ff98"`);
        await queryRunner.query(`ALTER TABLE "userroles" DROP CONSTRAINT "FK_93ff56f9d18997faacbeea72539"`);
        await queryRunner.query(`DROP TABLE "userroles"`);
    }

}
