import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error(
		"Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
	);
}

export const createSupabaseClient = () => {
	return createClient(supabaseUrl, supabaseAnonKey);
};

/**
 * Create a Supabase client that includes the current Clerk user's access token
 * in the Authorization header when available. This is useful on the server
 * so Supabase RLS policies can run with the user's identity.
 */
export async function createSupabaseClientWithClerkAuth() {
	try {
		const clerkAuth = auth();
		// clerkAuth.getToken may be undefined in some contexts; guard it.
		const token = clerkAuth && typeof clerkAuth.getToken === "function"
			? await clerkAuth.getToken()
			: null;

		if (token) {
			return createClient(supabaseUrl, supabaseAnonKey, {
				global: {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			});
		}

		// Fallback to an unauthenticated client when there's no user token.
		return createClient(supabaseUrl, supabaseAnonKey);
	} catch (err) {
		// If anything goes wrong while fetching the token, return a basic client.
		return createClient(supabaseUrl, supabaseAnonKey);
	}
}

export default createSupabaseClient;