import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUsersTableUniqueUsername1723171878462 implements MigrationInterface {
    name = 'AlterUsersTableUniqueUsername1723171878462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"`);
    }

}
