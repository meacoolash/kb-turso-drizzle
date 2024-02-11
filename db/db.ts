import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const dbUrl = process.env.DATABASE_URL;
const dbToken = process.env.DATABASE_AUTH_TOKEN;

console.log(dbUrl);

if(!dbUrl || !dbToken) {
    process.exit(1);
}

export const client = createClient({ url: dbUrl, authToken: dbToken });
export const db = drizzle(client);
