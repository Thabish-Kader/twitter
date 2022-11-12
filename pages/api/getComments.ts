// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity";
import { Comment } from "../../typings";

const commentQuery = groq`*[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)]{
  id,
  ...
  
} | order(_createdAt desc)`;

type Data = {
	comments: Comment[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { tweetId } = req.query;
	const comments: Comment[] = await client.fetch(commentQuery, { tweetId });
	res.status(200).json({ comments });
}
