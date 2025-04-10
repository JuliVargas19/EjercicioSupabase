const { Pool } = require('pg'); 

const pool = new Pool({
    host: 'aws-0-us-east-1.pooler.supabase.com', 
    port: 5432,
    user: 'postgres.jkorjuxvaynxuukdxiwa',
    password: "Ca241240",
    database: 'postgres',
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;
