"use server";

import { headers, cookies } from "next/headers";

export async function getCookie(name: string) {
  return cookies().get(name);
}

export async function getHeader(name: string) {
  return headers().get(name);
}
