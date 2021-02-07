import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1612648110252 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'char',
        length: '255',
        isNullable: false,
      },
      {
        name: 'birthday',
        type: 'varchar',
        length: '10',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isNullable: true,
        isUnique: true,
      },
      {
        name: 'login',
        type: 'varchar',
        length: '127',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable(this.table);
  }
}
