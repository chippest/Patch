// filepath: c:\Users\Dell\Documents\Patch\database.js
const Database = require("better-sqlite3");
const db = new Database("bot.db");

// Example: Create a table for user data
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT,
    points INTEGER DEFAULT 0
  )
`
).run();

module.exports = db;
