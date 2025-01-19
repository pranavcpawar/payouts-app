import { db } from "./drizzle";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Migration completed ✅");
  } catch (error) {
    console.log("Migration failed ❌", error);
    process.exit(1);
  }
};

main();
