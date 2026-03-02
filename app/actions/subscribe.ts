"use server";

import { getDb } from "@/lib/db";

export type SubscribeState = {
  success: boolean;
  message: string;
} | null;

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { success: false, message: "Please enter your name." };
  }

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return { success: false, message: "Please enter your email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO subscribers (name, email)
      VALUES (${name.trim()}, ${email.trim().toLowerCase()})
      ON CONFLICT (email) DO UPDATE
      SET name = EXCLUDED.name,
          unsubscribed_at = NULL,
          subscribed_at = NOW()
    `;

    return { success: true, message: "You're on the list!" };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
