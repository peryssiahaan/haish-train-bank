import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRoleCode1723485315878 implements MigrationInterface {
    name = 'AlterTableRoleCode1723485315878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."roles_code_enum" RENAME TO "roles_code_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."roles_code_enum" AS ENUM('SUPERADMIN', 'ADMIN', 'USER')`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "code" TYPE "public"."roles_code_enum" USING "code"::"text"::"public"."roles_code_enum"`);
        await queryRunner.query(`DROP TYPE "public"."roles_code_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."roles_code_enum_old" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "code" TYPE "public"."roles_code_enum_old" USING "code"::"text"::"public"."roles_code_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."roles_code_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."roles_code_enum_old" RENAME TO "roles_code_enum"`);
    }

}
