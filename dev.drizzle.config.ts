import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/schema.ts',
    out: './src/db/drizzle',
    driver: 'pg',
    dbCredentials: {
        // connectionString:"postgresql://innovatec_owner:maF9eQPLA8Dk@ep-polished-bread-a6f3110c-pooler.us-west-2.aws.neon.tech/innovatec?sslmode=require" ,
        connectionString:"postgres://postgres:y3vILJZYHHFvcdF39Xo2Ffnwi3dngDrSIOSdN3ESlRiJTsYXnusbfR7iDfU78DkM@177.242.132.170:5432/postgres" ,
        // connectionString: "postgres://postgres:VL5UVTvjPNsokPyAfnBWnl8YJ0ecnf2kflgYbSNNXVDmUasCz8fU9JWaVwindge9@k8ss8cc:5432/postgres" ,
        // host: process.env.DATABASE_IP,
        // host: "localhost",
        // port: 5432,
        // user: "root",
        // password: "root",
        // database: "innovaTec"
    },
    verbose: true,
    strict: true
} satisfies Config;
