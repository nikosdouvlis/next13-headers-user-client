"use server";

import {
  getHeader as getHeaderBase,
  getCookie as getCookieBase,
} from "./actions";

export async function getCookie(name: string) {
  return getCookieBase(name);
}

export async function getHeader(name: string) {
  return getHeaderBase(name);
}
