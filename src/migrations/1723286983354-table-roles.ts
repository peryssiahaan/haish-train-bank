import { MigrationInterface, QueryRunner } from "typeorm";

export class TableRoles1723286983354 implements MigrationInterface {
    name = 'TableRoles1723286983354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."roles_code_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'SYSTEM', "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" character varying, "code" "public"."roles_code_enum" NOT NULL, "desc" character varying, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TYPE "public"."roles_code_enum"`);
    }

}
