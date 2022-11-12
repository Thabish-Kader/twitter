import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID,
			clientSecret: process.env.TWITTER_CLIENT_SECRET,
			version: "2.0",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),

		// ...add more providers here
	],
	secret: process.env.NEXT_SECRET,
};

export default NextAuth(authOptions);
