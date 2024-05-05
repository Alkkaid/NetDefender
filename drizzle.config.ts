import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/schema.ts',
    out: './src/db/drizzle',
    driver: 'pg',
    dbCredentials: {
        // connectionString: process.env.NEON_DATABASE_URL!,
        connectionString: "postgresql://innovatec_owner:maF9eQPLA8Dk@ep-polished-bread-a6f3110c-pooler.us-west-2.aws.neon.tech/innovatec?sslmode=require",


        //NOTE: THIS IS FOR POSTGRES
        // host: process.env.DATABASE_IP,
        // port: 5432,
        // user: "root",
        // password: "root",
        // database: "innovaTec"


        // NOTE: THIS IS FOR TECNIKA DB
        // host: "177.242.132.170",
        // port: 3001,
        // user: "root",
        // password: "root",
        // database: "name_db"
    },
    verbose: true,
    strict: true
} satisfies Config;
