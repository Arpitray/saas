'use server';
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabse";

/**
 * Create a new companion
 * @param {Object} formData - The companion data
 * @returns {Promise<Object>} The created companion
 */
export const createCompanion = async (formData) => {
  const { userId: author } = await auth();
  
  if (!author) {
    throw new Error("Unauthorized: User must be signed in to create a companion");
  }

  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data) {
    throw new Error(error?.message || "Failed to create a companion");
  }

  return data[0];
};