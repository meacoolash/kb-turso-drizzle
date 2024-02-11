import { createClient } from "@libsql/client";

const client = createClient({
   url: "file:local.db",
   syncUrl: process.env.DATABASE_URL,
   authToken: process.env.DATABASE_AUTH_TOKEN,
});

await client.sync();