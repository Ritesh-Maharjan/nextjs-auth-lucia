import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Lucia } from "lucia";
import { db } from "./db";
import { cache } from "react";
import { User } from "lucia";
import { Session } from "lucia";
import { cookies } from "next/headers";

// Access db from your application
const client = db;

// Create a new PrismaAdapter instance
const adapter = new PrismaAdapter(client.session, client.user);

// Create Lucia instance with adapter and configuration
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes: DatabaseUserAttributes) => {
    return {
      name: attributes.name,
      email: attributes?.email,
      id: attributes?.id,
    };
  },
});

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return { user: null, session: null };
    }
    const result = await lucia.validateSession(sessionId);
    try {
      if (result.session && result.session.fresh) {
        // create the cookie
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      } else {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch (err) {}
    return result;
  }
);

// Extend module definition for TypeScript
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

// Define DatabaseUserAttributes interface
interface DatabaseUserAttributes {
  id: string;
  name?: string;
  email: string;
}
