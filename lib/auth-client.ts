import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URI!,
});
