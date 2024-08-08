import { DataSource, type DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';

config();

const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +(process.env.PG_PORT ?? 5432),
  synchronize: false,
  entities: [path.join(__dirname, '../modules/**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../migrations/*{.ts,.js}')],
  logging: true,
  logger: 'file',
};

export default (): DataSourceOptions => dataSourceOption;

export const datasource = new DataSource(dataSourceOption);
