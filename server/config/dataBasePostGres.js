const knex = require('knex')
const PGHOST='ep-round-tree-a2nv3plk.eu-central-1.aws.neon.tech'
const PGDATABASE='postgres'
const PGUSER='neondb_owner'
const PGPASSWORD='di_bootcamp'
const PGPORT = 5432
const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false}
    }
})