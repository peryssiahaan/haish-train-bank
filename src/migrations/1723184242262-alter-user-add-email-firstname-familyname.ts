import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserAddEmailFirstnameFamilyname1723184242262 implements MigrationInterface {
    name = 'AlterUserAddEmailFirstnameFamilyname1723184242262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "familyName" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "familyName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

}
