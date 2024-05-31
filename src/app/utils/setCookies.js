import { cookies } from "next/headers";

export async function handleLogin(sessionData) {
  const encryptedSessionData = encrypt(sessionData); // Encrypt your session data
  cookies().set("session", encryptedSessionData, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60, // One Hour
    path: "/",
  });
}
