import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/schema.ts',
    out: './src/db/drizzle',
    driver: 'pg',
    dbCredentials: {
        // connectionString:"postgresql://innovatec_owner:maF9eQPLA8Dk@ep-polished-bread-a6f3110c-pooler.us-west-2.aws.neon.tech/innovatec?sslmode=require" ,
        connectionString:"postgres://root:grnPxjp137IZq9urjBg4fyD5WywZsP0jh4Zdbqbe3XGqrVaZVo5nu7GCa3cJctSQ@177.242.132.170:5432/innovatec" ,
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
