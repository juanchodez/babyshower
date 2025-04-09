import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'dpg-cvqrgspr0fns73fqenm0-a.oregon-postgres.render.com',
  user: 'dbu1330973',
  password: 'QLuQBUMi5Qdiiu1pgrbETvdONP3zKgpK',
  database: 'dbs14100776',
  port: 5432, // El puerto debe ser un número
  ssl: true
});

export default pool;
