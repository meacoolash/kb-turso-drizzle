import { client, db } from "./db";
import { users } from "./schema";

// db.insert(users).values({id: 4, username: "ahaaaa"}).then(res => console.log(res)) 

const result = await db.select({
    field1: users.username,
  }).from(users);
  const { field1 } = result[0];
  console.log(result);

