"use server";

export async function inc(value: number) {
  return value + 1;
}

export async function dec(value: number) {
  return value - 1;
}

export default async function (value: number) {
  return value * 2;
}
