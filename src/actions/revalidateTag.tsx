// app/actions/revalidateTagAction.js

"use server";

import { revalidateTag } from "next/cache";

export async function revalidateTagAction(tag: string) {
  try {
    // Directly revalidate the specified tag
    await revalidateTag(tag);
    console.log(`Tag "${tag}" revalidated successfully`);
    return { revalidated: true };
  } catch (error: any) {
    console.error(`Error revalidating tag "${tag}":`, error);
    return { revalidated: false, error: error.message };
  }
}
