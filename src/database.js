import {createPool} from 'mysql2/promise';

 const pool = createPool({
    host: 'db5017618622.hosting-data.io',
    user: 'dbu1330973',
    password: 'HaciLuvita@135km.',
    database: 'dbs14100776',
    port: '3306'
}); 

/*const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'HaciLuvitalia135.',
    database: 'babyshower'
}); */

export default pool;