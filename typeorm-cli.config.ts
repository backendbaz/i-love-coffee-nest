import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass1234',
  database: 'postgres',
  entities: ['**/*.entity.js'],
  migrations: ['migrations/*.js'],
});
