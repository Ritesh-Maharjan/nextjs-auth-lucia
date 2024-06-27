"use server";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  const sessionId = cookies().get("auth_session")?.value;

  if (sessionId) {
    // This will succeed even if the session ID is invalid. and users will be signed out
    await lucia.invalidateSession(sessionId);
    // deleting the cookies since the lucia automatically didnt delete the cookies
    cookies().delete("auth_session");
    return redirect("/auth/login");
  }

  return redirect("/auth/login");
};
