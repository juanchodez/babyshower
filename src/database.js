import {createPool} from 'mysql2/promise';

 const pool = createPool({
    host: 'dpg-cvqrgspr0fns73fqenm0-a',
    user: 'dbu1330973',
    password: 'QLuQBUMi5Qdiiu1pgrbETvdONP3zKgpK',
    database: 'dbs14100776',
    port: '5432'
}); 

/*const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'HaciLuvitalia135.',
    database: 'babyshower'
}); */

export default pool;
