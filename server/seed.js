import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
    CREATE TABLE messagesa (
        id SERIAL PRIMARY KEY,
        name TEXT,
        note TEXT,
    )
    
    insert into
      messagesa (name, note)
    values
      ('Lewis Hamilton', 'Hello :)'),
      ('George Russell', 'hi :)'),
      ('Lando Norris', 'is it friday yet?');`);
