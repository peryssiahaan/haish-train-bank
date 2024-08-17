import { MigrationInterface, QueryRunner } from "typeorm";

export class QuestionTable1723898062664 implements MigrationInterface {
    name = 'QuestionTable1723898062664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."questions_difficulty_enum" AS ENUM('NORMAL', 'INTERMEDIATE', 'ADVANCE')`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'SYSTEM', "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" character varying, "value" character varying NOT NULL, "difficulty" "public"."questions_difficulty_enum" NOT NULL, CONSTRAINT "UQ_966c34e59fbd1fdfe31695d5ce1" UNIQUE ("value"), CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TYPE "public"."questions_difficulty_enum"`);
    }

}
