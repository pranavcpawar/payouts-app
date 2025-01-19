import { db } from "@/db/drizzle";
import { accounts, sessions, users, verifications } from "@/db/schemas";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      users,
      accounts,
      sessions,
      verifications,
    },
    usePlural: true,
  }),
});
