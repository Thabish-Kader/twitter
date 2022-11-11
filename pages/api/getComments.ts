// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const commentQuery = groq`*[_type == "tweet" && !blockTweet]{
  id,
  ...
  
} | order(_createdAt desc)`;
type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ name: "John Doe" });
}
