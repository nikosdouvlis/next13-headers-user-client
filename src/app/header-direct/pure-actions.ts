"use server";

export async function getCookie(name: string) {
  return { name: "mock-cookie", value: "mock-cookie" };
}

export async function getHeader(name: string) {
  return "mock-header";
}
