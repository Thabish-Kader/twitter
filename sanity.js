import { createClient } from "next-sanity";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2022-11-10",
	useCdn: process.env.NODE_ENV === "production",
});
