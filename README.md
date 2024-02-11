# kb-turso-drizzle

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## TURSO (SQLite)
run actions: 
```bash
bun db/actions.ts
```

generate and push scheme: 
```bash 
bun drizzle-kit generate:sqlite
bun drizzle-kit push:sqlite
```

view database with drizzle-kit studio: 
```
bunx drizzle-kit studio  
```


This repository is intended for educational use. For actual projects, ensure to exclude local.db from version control by adding it to your .gitignore file. 